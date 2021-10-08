import React, { useState } from 'react'
import { Platform, Switch } from 'react-native'

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
};

export const CustomSwitch = ({ isOn, onChange }: Props) => {
    // const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        // setIsEnabled(!isEnabled);
        onChange(!isOn);
    };

    return (
        <Switch
            trackColor={{ false: "#d9d9db", true: "#5856d6" }}
            // thumbColor={isEnabled ? "white" : "white"}
            thumbColor={Platform.OS === 'android' ? "white" : ""}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isOn}
        />
    )
}
