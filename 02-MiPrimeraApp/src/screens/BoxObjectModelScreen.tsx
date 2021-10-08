import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model</Text>
        </View>
    );
};

export default BoxObjectModelScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
    },
    title: {
        padding: 20,
        fontSize: 25,
        borderWidth: 4,
        marginHorizontal: 10,
        marginVertical: 20,
        paddingVertical: 30,
        fontWeight: 'bold',
    },
});
