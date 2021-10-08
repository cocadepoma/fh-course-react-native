import React, { useState } from 'react'
import { Switch, View, Platform, Text, StyleSheet } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';

export const SwitchScreen = () => {
    const [state, setState] = useState({
        isActive: false,
        isHungry: false,
        isHappy: true,
    });
    const { isActive, isHungry, isHappy } = state;

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value,
        });
    };

    return (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title="Switches" />

            <View style={styles.switchRow}>
                <Text style={styles.switchText}>Is Active</Text>
                <CustomSwitch onChange={(value) => onChange(value, 'isActive')} isOn={isActive} />
            </View>

            <View style={styles.switchRow}>
                <Text style={styles.switchText}>Is Hungry</Text>
                <CustomSwitch onChange={(value) => onChange(value, 'isHungry')} isOn={isHungry} />
            </View>

            <View style={styles.switchRow}>
                <Text style={styles.switchText}>Is Happy</Text>
                <CustomSwitch onChange={(value) => onChange(value, 'isHappy')} isOn={isHappy} />
            </View>

            <Text style={styles.switchText}>
                {JSON.stringify(state, null, 5)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
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


