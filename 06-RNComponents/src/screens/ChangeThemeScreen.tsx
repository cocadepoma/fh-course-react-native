import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const ChangeThemeScreen = () => {
    const { setDarkTheme, setLightTheme, theme } = useContext(ThemeContext);

    const changeTheme = () => {
        theme.currentTheme === 'dark'
            ? setLightTheme()
            : setDarkTheme();
    };

    return (
        <View style={styles.globalMArgin}>
            <HeaderTitle title="Theme" />
            <TouchableOpacity
                onPress={changeTheme}
                activeOpacity={0.8}
                style={{
                    backgroundColor: theme.colors.primary,
                    width: 150,
                    height: 50,
                    borderRadius: 20,
                    justifyContent: 'center',
                }}>
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 22,
                }}>Light / Dark</Text>
            </TouchableOpacity>
        </View>
    );
};
