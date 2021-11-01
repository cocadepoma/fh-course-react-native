import React, { useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';

import { ProductsStackParams } from '../navigator/ProductsNavigator';
import { useCategories } from '../hook/useCategories';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'> { };

export const ProductScreen = ({ navigation, route }: Props) => {
  const { id = '', name = '' } = route.params;
  const [selectedLanguage, setSelectedLanguage] = useState();

  const { categories, isLoading } = useCategories();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: (name) ? name : 'New Product',
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Product name:</Text>
        <View style={styles.inputContainer}>
          <Icon
            name="pricetag-outline"
            size={25}
            color="rgba(255, 193, 36, 1)"
            style={{
              ...styles.inputIcon,
              marginRight: 15,
            }}
          />
          <TextInput
            placeholder="Product"
            style={styles.textInput}
            placeholderTextColor="rgba(0,0,0,0.7)"
          />
        </View>

        {/* Picker / Selector */}
        <Text style={styles.label}>Category:</Text>
        <View style={styles.inputContainer}>
          <Icon
            name="grid-outline"
            size={25}
            color="rgba(255, 193, 36, 1)"
            style={styles.inputIcon}
          />
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
            style={styles.picker}
          >
            <Picker.Item label="Choose Category" value="Unknown" enabled={false} color="grey" style={{ fontSize: 18 }} />

            {categories.map((c) => (
              <Picker.Item
                label={c.nombre}
                value={c._id}
                key={c._id}
                color="#F0C300"
              />
            ))}

          </Picker>
        </View>


        <Button
          title="Save"
          onPress={() => console.log('save')}
          color="#F0C300"
        />

        <View style={styles.buttonsContainer}>
          <Button
            title="Camera"
            onPress={() => console.log('save')}
            color="#F0C300"
          />
          <View style={{ width: 10 }} />
          <Button
            title="Gallery"
            onPress={() => console.log('save')}
            color="#F0C300"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    color: 'rgba(0,0,0,0.7)',
    fontSize: 19,
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.05)',
    marginBottom: 15,
    marginTop: 5,
  },
  inputIcon: {
    padding: 10,
    marginRight: 4,
  },
  textInput: {
    flex: 1,
    color: 'black',
    fontSize: 18,
  },
  picker: {
    color: 'rgba(0,0,0,0.7)',
    flex: 1,
    width: '100%',
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  }
});
