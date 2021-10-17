import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Platform, StyleProp, ViewStyle, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
  style?: StyleProp<ViewStyle>;
  onDebounce: (value: string) => void;
}
const SearchInput = ({ style, onDebounce }: Props) => {
  const [textValue, setTextValue] = useState<string>('');
  const { debouncedValue } = useDebouncedValue(textValue);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{
        ...styles.container,
        ...style as any,
      }}>
        <View style={styles.textBackground}>
          <TextInput
            placeholderTextColor="grey"
            placeholder="Search Pokemon"
            style={{
              ...styles.textInput,
              top: Platform.OS === 'ios' ? 0 : 1
            }}
            autoCapitalize="none"
            autoCorrect={false}
            value={textValue}
            onChangeText={setTextValue}
            autoCompleteType="off"
          />
          <Icon
            name="search-outline"
            color="grey"
            size={30}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 45,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: 'grey',
  },
});
