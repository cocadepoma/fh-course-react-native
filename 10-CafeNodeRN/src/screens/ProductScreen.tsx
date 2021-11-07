import React, { useContext, useEffect, useRef, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { ActivityIndicator, Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import { ProductsStackParams } from '../navigator/ProductsNavigator';
import { useCategories } from '../hook/useCategories';
import { useForm } from '../hook/useForm';
import { ProductsContext } from '../context/ProductsContext';
interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'> { };

export const ProductScreen = ({ navigation, route }: Props) => {
  const { id: paramId = '', name: paramName = '' } = route.params;
  const isMounted = useRef(true);

  const { loadProductById, addProduct, updateProduct, uploadImage } = useContext(ProductsContext);

  const [isLoading, setIsLoading] = useState(true);
  const [tempUri, setTempUri] = useState<string>();
  const [imageUploading, setImageUploading] = useState(false);

  const { categories } = useCategories();

  const { _id, categoryId, name, image, onChange, setFormValue } = useForm({
    _id: paramId,
    categoryId: '',
    name: paramName,
    image: '',
  });

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    }
  }, []);

  useEffect(() => {
    if (!isMounted.current) return;

    // Set the name of product in title header
    navigation.setOptions({
      headerTitle: (name) ? name : 'Product name empty',
    });
  }, [name]);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    if (paramId.length === 0) return setIsLoading(false);

    const product = await loadProductById(paramId);
    setFormValue({
      _id: product._id,
      categoryId: product.categoria._id,
      name: product.nombre,
      image: product.img || ''
    });
    setIsLoading(false);
  };

  const saveOrUpdate = async () => {
    if (categoryId.length === 0 || name.length === 0) {
      return showError();
    }

    if (_id.length > 0) {
      updateProduct(categoryId, name, _id);
    } else {
      const newProduct = await addProduct(categoryId, name);
      onChange(newProduct._id, '_id');
    }
    navigation.goBack();
  };

  const showError = () => {
    let message = 'Product name and category are mandatory';

    if (categoryId.length > 0 && name.length === 0) {
      message = 'You must type a Product Name';
    } else if (categoryId.length === 0 && name.length > 0) {
      message = 'You must select a category';
    }

    Alert.alert(
      'Error',
      message,
      [{ text: 'Close' }]
    );
  };

  const takePhoto = () => {
    launchCamera({
      mediaType: 'photo',
      quality: 0.5
    }, async (resp) => {
      if (resp.didCancel) return;
      if (!resp?.assets![0]?.uri) return;
      setTempUri(resp.assets[0].uri);

      setImageUploading(true);
      await uploadImage(resp.assets[0], _id);
      setImageUploading(false);
    });
  };

  const takePhotoFromLibrary = () => {
    launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5
    }, async (resp) => {
      if (resp.didCancel) return;
      if (!resp?.assets![0]?.uri) return;
      setTempUri(resp.assets[0].uri);

      setImageUploading(true);
      await uploadImage(resp.assets[0], _id);
      setImageUploading(false);
    });
  };

  return (
    <>
      {!isLoading
        ? (
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
                  value={name}
                  style={styles.textInput}
                  placeholderTextColor="rgba(0,0,0,0.7)"
                  onChangeText={(value) => onChange(value, 'name')}
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
                  selectedValue={categoryId}
                  onValueChange={(value) => onChange(value, 'categoryId')}
                  style={styles.picker}
                >

                  <Picker.Item
                    label="Choose Category"
                    value="Unknown"
                    enabled={false}
                    color="grey"
                    style={{ fontSize: 18 }}
                  />

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
                onPress={saveOrUpdate}
                color="rgba(255, 204, 0, 0.8)"
              />

              {
                _id.length > 0 && (
                  <View style={styles.buttonsContainer}>
                    <Button
                      title="Camera"
                      onPress={takePhoto}
                      color="rgba(255, 204, 0, 0.8)"
                    />
                    <View style={{ width: 10 }} />
                    <Button
                      title="Gallery"
                      onPress={takePhotoFromLibrary}
                      color="rgba(255, 204, 0, 0.8)"
                    />
                  </View>
                )
              }
              {
                (image.length > 0 && !tempUri) && (
                  <Image
                    source={{ uri: image }}
                    style={{ width: '100%', height: 300, marginTop: 20 }}
                  />
                )
              }
              {
                tempUri && !imageUploading && (
                  <Image
                    source={{ uri: tempUri }}
                    style={{ width: '100%', height: 300, marginTop: 20 }}
                  />
                )
              }
              {
                tempUri && imageUploading && (
                  <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color="orange" size={40} />
                  </View>
                )
              }
            </ScrollView>
          </View>
        )
        : (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 30 }}>
            <ActivityIndicator color="rgba(255, 204, 0, 0.8)" size={60} />
          </View>
        )
      }

    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginHorizontal: 20,
  },
  label: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 19,
    fontWeight: '400',
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
