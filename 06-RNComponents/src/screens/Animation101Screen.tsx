import React, { useContext, useRef } from 'react'
import { StyleSheet, View, Animated, Button, Easing } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
    const {
        fadeIn,
        fadeOut,
        opacity,
        position,
        startMovingPosition
    } = useAnimation();
    const { theme: { colors } } = useContext(ThemeContext);
    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    ...styles.purpleBox,
                    backgroundColor: colors.primary,
                    opacity,
                    transform: [{ translateX: position }]
                }} />
            <Button
                title="fadeIn"
                onPress={() => {
                    fadeIn(300);
                    startMovingPosition(100);
                }}
                color={colors.primary}
            />
            <Button
                color={colors.primary}
                title="fadeOut"
                onPress={fadeOut}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: 'purple',
        width: 150,
        height: 150
    },
});