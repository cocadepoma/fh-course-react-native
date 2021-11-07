import React, { useContext, useEffect, useState } from 'react'
import { KeyboardAvoidingView, Keyboard, Platform, Text, TextInput, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { useForm } from '../hook/useForm';
import { loginTheme } from '../theme/loginTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';
import { IsLogin } from '../components/IsLogin';

interface Props extends StackScreenProps<any, any> { };

const LoginScreen = ({ navigation }: Props) => {
  const { signIn, errorMessage, removeError, status } = useContext(AuthContext);
  const { email, password, onChange } = useForm({
    email: '',
    password: '',
  });

  const [isLoginIn, setIsLoginIn] = useState(false);

  const onLogin = async () => {
    console.log(status)
    if (email.length > 0 && password.length > 0) {
      setIsLoginIn(true)
      Keyboard.dismiss();
      await signIn({ correo: email, password });
      setIsLoginIn(false);
      return;
    }
    handleAlertInputs();
  };

  const handleAlertInputs = () => {
    let message = 'Email and Password are mandatory';
    if (email.length === 0 && password.length > 0) {
      message = 'Email is mandatory';
    }
    if (email.length > 0 && password.length === 0) {
      message = 'Password is mandatory';
    }

    Alert.alert('Login Failed', message);
  };

  useEffect(() => {
    if (errorMessage.length === 0) return;
    Alert.alert('Login Failed', errorMessage, [
      {
        text: 'Ok',
        onPress: () => removeError()
      }
    ]);
  }, [errorMessage]);

  useEffect(() => {
    setIsLoginIn(false);
  }, []);

  return (
    <>
      {/* Background */}
      <Background />
      {
        !isLoginIn
          ? (
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={{
                flex: 1,
                elevation: 10,
              }}>
              <View style={loginTheme.formContainer}>

                {/* Logo */}
                <WhiteLogo />

                {/* Text Header */}
                <Text style={loginTheme.title}>Login</Text>

                {/* Input Email */}
                <Text style={loginTheme.label}>Email:</Text>
                <TextInput
                  style={[
                    loginTheme.inputField,
                    (Platform.OS === 'ios' && loginTheme.inputFieldIOS)
                  ]}
                  placeholder="Type your email"
                  placeholderTextColor="rgba(255,255,255,0.4)"
                  keyboardType="email-address"
                  underlineColorAndroid="white"
                  selectionColor="lightgrey"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="off"
                  onChangeText={(value) => onChange(value, 'email')}
                  value={email}
                  onSubmitEditing={onLogin}
                />

                {/* Input Password */}
                <Text style={loginTheme.label}>Password:</Text>
                <TextInput
                  style={[
                    loginTheme.inputField,
                    (Platform.OS === 'ios' && loginTheme.inputFieldIOS)
                  ]}
                  secureTextEntry
                  placeholder="******"
                  placeholderTextColor="rgba(255,255,255,0.4)"
                  underlineColorAndroid="white"
                  selectionColor="lightgrey"
                  autoCapitalize="none"
                  autoCorrect={false}
                  autoCompleteType="off"
                  onChangeText={(value) => onChange(value, 'password')}
                  value={password}
                  onSubmitEditing={onLogin}
                />

                {/* Button Login */}
                <View style={loginTheme.buttonContainer}>
                  <TouchableOpacity
                    style={loginTheme.button}
                    activeOpacity={0.8}
                    onPress={onLogin}
                  >
                    <Text style={loginTheme.buttonText}>Login</Text>
                  </TouchableOpacity>
                </View>

                {/* Button New Account */}

                <TouchableOpacity
                  style={loginTheme.buttonReturn2}
                  activeOpacity={0.8}
                  onPress={() => navigation.replace('RegisterScreen')}
                >
                  <Text style={loginTheme.buttonText2}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          )
          : (
            <IsLogin />
          )
      }

    </>
  );
};

export default LoginScreen;
