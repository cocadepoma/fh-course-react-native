import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cafeApi from '../api/cafeApi';
import { User, LoginResponse, LoginData, RegisterData } from '../interfaces/appInterfaces';
import { AuthReducer, AuthState } from './authReducer';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: User | null;
  status: 'checking' | 'authenticated' | 'notAuthenticated';
  signUp: (registerData: RegisterData) => Promise<boolean>;
  signIn: (loginData: LoginData) => Promise<boolean>;
  logOut: () => void;
  removeError: () => void;
};

const initialState: AuthState = {
  errorMessage: '',
  token: null,
  user: null,
  status: 'checking',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = AsyncStorage.getItem('token');
    if (!token) return dispatch({ type: 'notAuthenticated' });

    try {
      const resp = await cafeApi.get<LoginResponse>('/auth');

      if (resp.status !== 200) {
        return dispatch({ type: 'notAuthenticated' });
      }

      await AsyncStorage.setItem('token', resp.data.token);

      dispatch({
        type: 'signUp',
        payload: {
          token: resp.data.token,
          user: resp.data.usuario
        }
      });
    } catch (error) {
      console.log(error);
      return dispatch({ type: 'notAuthenticated' });
    }
  };

  const signIn = async ({ correo, password }: LoginData) => {
    try {
      const { data } = await cafeApi.post<LoginResponse>('/auth/login', { correo, password });
      dispatch({
        type: 'signUp',
        payload: {
          token: data.token,
          user: data.usuario
        }
      });
      await AsyncStorage.setItem('token', data.token);
      return true;
    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Something went wrong'
      });
      return false;
    }
  };

  const signUp = async ({ nombre, correo, password }: RegisterData) => {
    try {
      const { data } = await cafeApi.post<LoginResponse>('/usuarios', { nombre, correo, password });
      dispatch({
        type: 'signUp',
        payload: {
          token: data.token,
          user: data.usuario
        }
      });
      await AsyncStorage.setItem('token', data.token);
      return true;
    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload: error.response.data.errors[0].msg || 'Check the information'
      });
      return false;
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'logOut' });
  };

  const removeError = () => {
    dispatch({ type: 'removeError' });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        logOut,
        removeError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};
