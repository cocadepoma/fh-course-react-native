import React, { useRef } from 'react'
import { Animated, Button, View } from 'react-native'
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {
    const { opacity, fadeIn, fadeOut } = useFade();

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Animated.View style={{
                borderColor: 'white',
                borderWidth: 10,
                backgroundColor: '#084F6A',
                width: 150,
                height: 150,
                opacity: opacity,
                marginBottom: 20,
            }} />

            <Button title="fadeIn" onPress={() => fadeIn} />
            <Button title="fadeOut" onPress={() => fadeOut} />
        </View>
    )
}
