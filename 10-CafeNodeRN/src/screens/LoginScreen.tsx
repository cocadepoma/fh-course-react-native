import React, { useContext, useEffect } from 'react'
import { KeyboardAvoidingView, Keyboard, Platform, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { useForm } from '../hook/useForm';
import { loginTheme } from '../theme/loginTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> { };

const LoginScreen = ({ navigation }: Props) => {
  const { signIn, errorMessage, removeError, status } = useContext(AuthContext);
  const { email, password, onChange } = useForm({
    email: '',
    password: '',
  });

  const onLogin = () => {
    if (email.length > 0 && password.length > 0) {
      Keyboard.dismiss();
      signIn({ correo: email, password });
      console.log(status)
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

  return (
    <>
      {/* Background */}
      <Background />

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
    </>
  );
};

export default LoginScreen;
