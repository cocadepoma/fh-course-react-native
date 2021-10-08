import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { appStyles } from '../theme/appTheme';

interface ButtonProps {
    bgColor?: string;
    text: string;
    textColor?: string;
    onPress: (action: string) => void;
    extraWide?: boolean;
    isActive?: boolean;
};

const ButtonCalc = (
    {
        isActive = false,
        bgColor = '#2D2D2D',
        text = '',
        textColor = 'white',
        onPress,
        extraWide = false,
    }: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={() => onPress(text)}
        >
            <View
                style={{
                    ...appStyles.button,
                    backgroundColor: !isActive ? bgColor : '#ffe0a3',
                    width: extraWide ? 160 : 70,
                }} >
                <Text
                    style={{
                        ...appStyles.buttonText,
                        color: !isActive ? textColor : '#000',
                    }}
                >
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ButtonCalc;
