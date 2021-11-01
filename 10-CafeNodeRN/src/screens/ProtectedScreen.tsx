import React, { useContext } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const ProtectedScreen = () => {
    const { user, token, logOut } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Protected Screen</Text>
            <TouchableOpacity
                style={styles.logoutButton}
                activeOpacity={0.8}
                onPress={logOut}
            >
                <Text style={styles.logoutText}>Log out</Text>
            </TouchableOpacity>

            <Text style={styles.info}>
                {JSON.stringify(user, null, 2)}
            </Text>
            <Text style={styles.info}>
                {token}
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        marginBottom: 20
    },
    logoutButton: {
        backgroundColor: 'darkblue',
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'white',
        padding: 10,
    },
    logoutText: {
        fontSize: 20,
        color: 'white'
    },
    info: {
        fontSize: 18,
        color: 'black',
    }
});

export default ProtectedScreen;
