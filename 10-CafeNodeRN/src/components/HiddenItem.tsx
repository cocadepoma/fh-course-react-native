import React from 'react'
import { ActivityIndicator, StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  deleteProductOnPush: (id: string) => void;
  isDeleting: boolean;
  itemId: string;
}

export const HiddenItem = ({ deleteProductOnPush, isDeleting, itemId }: Props) => {
  return (
    <View style={styles.rowBack}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => deleteProductOnPush(itemId)}
        style={styles.deleteButton}
      >
        {!isDeleting
          ? (
            <Icon
              name="trash-outline"
              size={25}
              color="white"
              style={{ marginRight: 10 }}
            />
          )
          : (
            <ActivityIndicator size={25} color="white" style={{ marginRight: 15 }} />
          )
        }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rowBack: {
    // alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 15,
  },
  deleteButton: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 10,
    backgroundColor: 'red',
    flex: 1,
    height: '100%'
  }
});
