import React, { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { BlackButton } from '../components/BlackButton';
import { PermissionsContext } from '../context/PermissionsContext';

const PermissionsScreen = () => {
    const { permissions, askLocationPermision } = useContext(PermissionsContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Is mandatory to have location permissions for this application</Text>
            <BlackButton title="Permission" onPress={askLocationPermision} />
            <Text style={{ color: 'black' }}>
                {JSON.stringify(permissions, null, 5)}
            </Text>
        </View>
    );
};

export default PermissionsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: 'black',
        width: 260,
        marginBottom: 20,
    }
});
