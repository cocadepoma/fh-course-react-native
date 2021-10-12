import React, { useContext, useState } from 'react'
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Keyboard, Switch } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        email2: '',
        phone: '',
        isSubscribed: false,
    });
    const { theme } = useContext(ThemeContext);
    const { colors, currentTheme } = theme;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                <View style={styles.globalMArgin}>
                    <HeaderTitle title="Text Inputs" />
                    <Text style={{ ...stylesInputs.label, color: colors.primary }}>Name</Text>
                    <TextInput
                        style={{ ...stylesInputs.inputStyle, backgroundColor: currentTheme === 'dark' ? 'grey' : 'white' }}
                        placeholder="Enter Name"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(value) => onChange(value, 'name')}
                        placeholderTextColor={colors.text}
                    />
                    <View style={stylesInputs.switchRow}>
                        <Text style={stylesInputs.switchText}>Subscribe</Text>
                        <CustomSwitch onChange={(value) => onChange(value, 'isSubscribed')} isOn={isSubscribed} />
                    </View>
                    <Text style={{ ...stylesInputs.label, color: colors.primary }}>Email (without autoCorrect)</Text>
                    <TextInput
                        style={{ ...stylesInputs.inputStyle, backgroundColor: currentTheme === 'dark' ? 'grey' : 'white' }}
                        placeholder="Enter Email"
                        autoCapitalize="none"
                        onChangeText={(value) => onChange(value, 'email')}
                        keyboardType="email-address"
                        keyboardAppearance="dark"
                        placeholderTextColor={colors.text}
                    // autoCorrect={false}
                    />

                    <Text style={{ ...stylesInputs.label, color: colors.primary }}>Repeat Email (without autoCorrect)</Text>
                    <TextInput
                        style={{ ...stylesInputs.inputStyle, backgroundColor: currentTheme === 'dark' ? 'grey' : 'white' }}
                        placeholder="Enter Email"
                        autoCapitalize="none"
                        onChangeText={(value) => onChange(value, 'email2')}
                        keyboardType="email-address"
                        keyboardAppearance="dark"
                        placeholderTextColor={colors.text}
                    // autoCorrect={false}
                    />
                    <HeaderTitle title={JSON.stringify(form, null, 3)} />
                    <HeaderTitle title={JSON.stringify(form, null, 3)} />

                    <Text style={{ ...stylesInputs.label, color: colors.primary }}>Phone Number</Text>
                    <TextInput
                        style={{ ...stylesInputs.inputStyle, backgroundColor: currentTheme === 'dark' ? 'grey' : 'white' }}
                        placeholder="Enter your phone number"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'phone')}
                        keyboardType="phone-pad"
                        placeholderTextColor={colors.text}
                        autoCapitalize="none"
                        autoCompleteType="off"
                    />


                    <View style={{ height: 70 }} />
                </View>
                {/* </TouchableWithoutFeedback> */}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const stylesInputs = StyleSheet.create({
    label: {
        color: '#565656',
    },
    inputStyle: {
        color: '#565656',
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    switchText: {
        color: '#565656',
        fontSize: 25
    },
    switchRow: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
});
