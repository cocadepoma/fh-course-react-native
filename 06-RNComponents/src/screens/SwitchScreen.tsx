import React, { useContext, useState } from 'react'
import { Switch, View, Platform, Text, StyleSheet } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {
    const [state, setState] = useState({
        isActive: false,
        isHungry: false,
        isHappy: true,
    });
    const { isActive, isHungry, isHappy } = state;
    const { theme: { colors } } = useContext(ThemeContext);

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value,
        });
    };

    const styles = StyleSheet.create({
        switchText: {
            color: colors.text,
            fontSize: 25
        },
        switchRow: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15,
        },
    });

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



