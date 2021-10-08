import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Fab } from '../components/Fab';

export const CounterSceen = () => {

    const [counter, setCounter] = useState(10);

    const onAdittion = () => {
        setCounter(counter + 1);
    };

    const onSubtract = () => {
        setCounter(counter - 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: <Text style={counter < 0 ? styles.red : styles.blue}>{counter}</Text>
            </Text>
            <Fab title="-1" onPress={onSubtract} position="bl" />
            <Fab title="+1" onPress={onAdittion} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dadada',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        top: -20,
    },
    red: {
        fontWeight: 'bold',
        color: 'red',
    },
    blue: {
        fontWeight: 'bold',
        color: 'blue',
    },
    fab: {
        backgroundColor: '#090097',
        borderWidth: 2,
        borderColor: "#415099",
        width: 65,
        height: 65,
        borderRadius: 100,
        flex: 0,
        justifyContent: 'center',
    },
    fabText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 3,
    },
    fabLocationBR: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
});