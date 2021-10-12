import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme'

interface Props {
    title: string;
    marginBottom?: number;
    marginTop?: number;
    fontSize?: number;
};

export const HeaderTitle = ({ title, marginBottom = 20, marginTop = 20, fontSize = 35 }: Props) => {
    const { top } = useSafeAreaInsets();

    return (
        <View style={{ marginTop: top + marginTop, marginBottom }}>
            <Text style={{ ...styles.title, fontSize }}>{title}</Text>
        </View>
    );
};
