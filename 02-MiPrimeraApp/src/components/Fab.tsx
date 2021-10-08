import React from 'react';
import {
    Text,
    TouchableNativeFeedback,
    View,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native';

interface Props {
    title: string
    position?: 'br' | 'bl',
    onPress: () => void,
};

export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                activeOpacity={0.75}
                onPress={onPress}
                style={[
                    styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right
                ]}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>

            </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            <View
                style={[
                    styles.fabLocation,
                    (position === 'bl') ? styles.left : styles.right
                ]}
            >
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('#fcefc7', false, 25)}
                    onPress={onPress}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };

    return (Platform.OS === 'ios') ? ios() : android();
};

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#f9d463',
        borderWidth: 1,
        borderColor: "#f9bb00",
        width: 50,
        height: 50,
        borderRadius: 100,
        flex: 0,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    fabText: {
        color: 'white',
        fontSize: 23,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 3,
    },
    fabLocation: {
        position: 'absolute',
        bottom: 20,
    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },
})