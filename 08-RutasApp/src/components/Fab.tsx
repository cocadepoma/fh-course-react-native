import React from 'react'
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    iconName: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

export const Fab = ({ iconName, onPress, style = {} }: Props) => {
    return (
        <View style={{ ...style as any }}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.blackButton}
            >
                <Icon
                    name={iconName}
                    color="white"
                    size={30}
                    style={{ left: 1 }}
                />

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    blackButton: {
        zIndex: 100,
        height: 50,
        width: 50,
        backgroundColor: 'black',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
});
