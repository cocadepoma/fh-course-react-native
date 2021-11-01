import React, { useContext, useEffect } from 'react'
import { KeyboardAvoidingView, Keyboard, Platform, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginTheme } from '../theme/loginTheme';
import { useForm } from '../hook/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> { };

const RegisterScreen = ({ navigation }: Props) => {
    const { name, email, password, onChange } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { signUp, errorMessage, removeError } = useContext(AuthContext);

    useEffect(() => {
        if (errorMessage.length === 0) return;
        Alert.alert('Register Failed', errorMessage, [
            {
                text: 'Ok',
                onPress: () => removeError()
            }
        ]);
        return () => {
            console.log('dismounted')
        }
    }, [errorMessage]);

    const onRegister = () => {
        Keyboard.dismiss();
        signUp({ nombre: name, correo: email, password });
    };

    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{
                    flex: 1,
                    elevation: 10,
                }}>

                <View style={loginTheme.formRegisterContainer}>

                    {/* Logo */}
                    <WhiteLogo />

                    {/* Text Header */}
                    <Text style={loginTheme.title}>Register</Text>

                    {/* Input Email */}
                    <Text style={loginTheme.label}>Name:</Text>
                    <TextInput
                        style={[
                            loginTheme.inputField,
                            (Platform.OS === 'ios' && loginTheme.inputFieldIOS)
                        ]}
                        placeholder="Type your name"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        selectionColor="lightgrey"
                        autoCapitalize="words"
                        autoCorrect={false}
                        autoCompleteType="off"
                        onChangeText={(value) => onChange(value, 'name')}
                        value={name}
                        onSubmitEditing={onRegister}
                    />

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
                        onSubmitEditing={onRegister}
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
                        onSubmitEditing={onRegister}
                    />

                    {/* Button Login */}
                    <View style={loginTheme.buttonContainer}>
                        <TouchableOpacity
                            style={loginTheme.button}
                            activeOpacity={0.8}
                            onPress={onRegister}
                        >
                            <Text style={loginTheme.buttonText}>Create account</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Button New Account */}
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.replace('LoginScreen')}
                        style={loginTheme.buttonReturn}
                    >
                        <Text style={loginTheme.buttonText2}>Sign in</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    );
};

export default RegisterScreen;
