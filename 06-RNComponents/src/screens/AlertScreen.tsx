import React, { useContext } from 'react'
import { Button, View, Alert } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

import prompt from 'react-native-prompt-android';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const AlertScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);

    const showAlert = () => {
        Alert.alert(
            "Title",
            "This is the body of the alert",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "destructive"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            {
                cancelable: true,
                onDismiss: () => console.log("dismissed"),
            }
        );
    };

    const showPrompt = () => {
        // Only for iOS
        // Alert.prompt(
        //     'Está seguro?',
        //     'Esta acción es irreversible',
        //     (value: string) => console.log('info: ', value),
        //     'secure-text',
        //     'Hello! default value',
        //     'number-pad',
        // );
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    };

    return (
        <View style={styles.globalMArgin}>
            <HeaderTitle title="Alerts" />

            <Button
                color={colors.primary}
                title="Show Alert!"
                onPress={showAlert}
            />

            <View style={{ marginTop: 20 }}>
                <Button
                    color={colors.primary}
                    title="Show Prompt!"
                    onPress={showPrompt}
                />
            </View>
        </View>
    );
};
