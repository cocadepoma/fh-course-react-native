import React from 'react';
import { View, StyleSheet, Text, Dimensions, useWindowDimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

export const MeasuresScreen = () => {

    const { width, height } = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.purpleBox} />
                <View style={styles.orangeBox} />
            </View>
            <Text style={styles.title}>W: {width}</Text>
            <Text style={styles.title}>H: {height}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: 'red',
    },
    purpleBox: {
        width: '50%',
        height: '50%',
        backgroundColor: 'purple',
    },
    orangeBox: {
        width: '50%',
        height: '50%',
        backgroundColor: 'orange'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    }
});
