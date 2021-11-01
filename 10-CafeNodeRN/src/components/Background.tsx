import React from 'react'
import { useWindowDimensions, View } from 'react-native';

export const Background = () => {
    const { height, width } = useWindowDimensions();
    return (
        <View
            style={{
                position: 'absolute',
                backgroundColor: '#44413b',
                top: -750,
                left: -200,
                width: height + 1000,
                height: width + 1000,
                transform: [
                    { rotate: '-70deg' }
                ],
                elevation: 8,
            }}
        >

        </View>
    );
};
