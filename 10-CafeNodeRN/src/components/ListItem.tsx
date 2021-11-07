import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core';

export const ListItem = ({ item }: any) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('ProductScreen', { id: item._id, name: item.nombre })}
      style={styles.rowFront}
    >
      <Text style={styles.productName}>
        {item.nombre}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productName: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 20,
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: 'rgb(4, 16, 33)',
    borderBottomColor: 'rgba(208, 171, 0, 0.9)',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 45,
  },
});
