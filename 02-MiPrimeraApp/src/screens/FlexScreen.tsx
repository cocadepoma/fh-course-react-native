import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const FlexScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}>Box 1</Text>
            <Text style={styles.box2}>Box 2</Text>
            <Text style={styles.box3}>Box 3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'orange',
        alignItems: 'flex-start',
    },
    box1: {
        borderWidth: 2,
        borderColor: '#fff',
        fontSize: 30,
        backgroundColor: 'red',
    },
    box2: {
        borderWidth: 2,
        borderColor: '#fff',
        fontSize: 30,
        backgroundColor: 'blue',
    },
    box3: {
        borderWidth: 2,
        borderColor: '#fff',
        fontSize: 30,
        backgroundColor: 'green',
    },
});
