import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

const LoadingScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>Loading Screen</Text>
            <ActivityIndicator
                size={50}
                color="red"
            />
        </View>
    );
};
export default LoadingScreen;
