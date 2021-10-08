import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const TextInputScreen = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const onChange = (value: string, field: string) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    return (
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
            <Text style={stylesInputs.label}>Phone Number</Text>
            <TextInput
                style={stylesInputs.inputStyle}
                placeholder="Enter your phone number"
                autoCorrect={false}
                onChangeText={(value) => onChange(value, 'phone')}
                keyboardType="phone-pad"
                placeholderTextColor="#565656"
            />

            <HeaderTitle title={JSON.stringify(form, null, 3)} />
        </View>
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
});
