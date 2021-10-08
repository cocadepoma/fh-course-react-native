import React, { useRef } from 'react'
import { StyleSheet, View, Animated, Button, Easing } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {
    const {
        fadeIn,
        fadeOut,
        opacity,
        position,
        startMovingPosition
    } = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                opacity,
                transform: [{ translateX: position }]
            }} />
            <Button title="fadeIn" onPress={() => {
                fadeIn();
                startMovingPosition(100);
            }} />
            <Button title="fadeOut" onPress={fadeOut} />
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