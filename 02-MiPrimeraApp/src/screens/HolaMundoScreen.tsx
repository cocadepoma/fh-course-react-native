import React from 'react';
import { Text, View } from 'react-native';

export const HolaMundoScreen = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'orange',
            justifyContent: 'center',
        }}>
            <Text style={{
                fontSize: 45,
                fontWeight: 'bold',
                textAlign: 'center',
            }}>Hola Mundo!</Text>
        </View>
    );
};

export default HolaMundoScreen;
