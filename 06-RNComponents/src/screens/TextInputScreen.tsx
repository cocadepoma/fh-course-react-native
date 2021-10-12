import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, ScrollView, Keyboard, Switch } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreen = () => {
    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        email2: '',
        phone: '',
        isSubscribed: false,
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                <View style={styles.globalMArgin}>
                    <HeaderTitle title="Text Inputs" />
                    <Text style={stylesInputs.label}>Name</Text>
                    <TextInput
                        style={stylesInputs.inputStyle}
                        placeholder="Enter Name"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(value) => onChange(value, 'name')}
                        placeholderTextColor="#565656"
                    />
                    <View style={stylesInputs.switchRow}>
                        <Text style={stylesInputs.switchText}>Subscribe</Text>
                        <CustomSwitch onChange={(value) => onChange(value, 'isSubscribed')} isOn={isSubscribed} />
                    </View>
                    <Text style={stylesInputs.label}>Email (without autoCorrect)</Text>
                    <TextInput
                        style={stylesInputs.inputStyle}
                        placeholder="Enter Email"
                        autoCapitalize="none"
                        onChangeText={(value) => onChange(value, 'email')}
                        keyboardType="email-address"
                        keyboardAppearance="dark"
                        placeholderTextColor="#565656"
                    // autoCorrect={false}
                    />

                    <Text style={stylesInputs.label}>Repeat Email (without autoCorrect)</Text>
                    <TextInput
                        style={stylesInputs.inputStyle}
                        placeholder="Enter Email"
                        autoCapitalize="none"
                        onChangeText={(value) => onChange(value, 'email2')}
                        keyboardType="email-address"
                        keyboardAppearance="dark"
                        placeholderTextColor="#565656"
                    // autoCorrect={false}
                    />
                    <HeaderTitle title={JSON.stringify(form, null, 3)} />
                    <HeaderTitle title={JSON.stringify(form, null, 3)} />

                    <Text style={stylesInputs.label}>Phone Number</Text>
                    <TextInput
                        style={stylesInputs.inputStyle}
                        placeholder="Enter your phone number"
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'phone')}
                        keyboardType="phone-pad"
                        placeholderTextColor="#565656"
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
