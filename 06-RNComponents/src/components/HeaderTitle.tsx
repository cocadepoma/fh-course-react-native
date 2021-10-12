import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme'

interface Props {
    title: string;
    marginBottom?: number;
    marginTop?: number;
    fontSize?: number;
    color?: string;
};

export const HeaderTitle = ({ title, marginBottom = 20, marginTop = 20, fontSize = 35, color }: Props) => {
    const { top } = useSafeAreaInsets();
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={{ marginTop: top + marginTop, marginBottom }}>
            <Text style={{ ...styles.title, fontSize, color: color ? color : colors.text }}>{title}</Text>
        </View>
    );
};
