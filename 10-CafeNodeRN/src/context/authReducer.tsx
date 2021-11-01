import { User } from "../interfaces/appInterfaces";

export interface AuthState {
    status: 'checking' | 'authenticated' | 'notAuthenticated';
    token: string | null;
    errorMessage: string;
    user: User | null;
};

type AuthAction =
    | { type: 'signUp', payload: { token: string, user: User } }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'notAuthenticated' }
    | { type: 'logOut' }

export const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                user: null,
                token: null,
                status: 'notAuthenticated',
                errorMessage: action.payload,
            };

        case 'removeError':
            return {
                ...state,
                errorMessage: '',
            };

        case 'signUp':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                token: action.payload.token,
                user: action.payload.user
            };

        case 'notAuthenticated':
        case 'logOut':
            return {
                ...state,
                status: 'notAuthenticated',
                token: null,
                user: null
            };

        default:
            return { ...state }
    }
};