import React, { useContext, useEffect } from 'react'
import { Animated, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
    onPress: () => void
};

export const EnterButton = ({ onPress }: Props) => {
    const { opacity, fadeIn } = useAnimation();
    const { theme: { colors } } = useContext(ThemeContext);

    useEffect(() => {
        fadeIn(400);
    }, [])

    return (
        <Animated.View style={{
            width: 110,
            height: 40,
            backgroundColor: colors.primary,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            opacity,
            elevation: 5
        }}>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={onPress}
                activeOpacity={0.7}
            >
                <Text style={{ fontSize: 22, color: 'white', paddingBottom: 3 }}>Enter</Text>
                <Icon style={{ paddingTop: 2 }} color="white" size={30} name="chevron-forward-outline" />
            </TouchableOpacity>
        </Animated.View>
    );
};
