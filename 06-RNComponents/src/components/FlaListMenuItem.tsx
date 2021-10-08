import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';
import { useNavigation } from '@react-navigation/core';

interface Props {
    menuItem: MenuItem;
};

export const FlaListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color="#5856D6"
                    size={25}
                />
                <Text style={styles.itemText}>{menuItem.name} - {menuItem.icon}</Text>

                <View style={{ flex: 1 }} />
                <Icon
                    name="chevron-forward-outline"
                    color="#5856D6"
                    size={25}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    itemText: {
        color: 'black',
        marginLeft: 10,
        fontSize: 19,
    }
});