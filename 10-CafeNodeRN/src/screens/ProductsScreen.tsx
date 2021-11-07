import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  ActivityIndicator,
  RefreshControl, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';

import { ProductsContext } from '../context/ProductsContext';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

import { SwipeListView } from 'react-native-swipe-list-view';
import { ListItem } from '../components/ListItem';
import { HiddenItem } from '../components/HiddenItem';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> { };

export const ProductsScreen = ({ navigation }: Props) => {
  const { products, loadProducts, deleteProduct } = useContext(ProductsContext);
  const { logOut } = useContext(AuthContext);

  const isMounted = useRef(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isMounted.current) return;

    setHeaderOptions();

    return () => {
      isMounted.current = false;
    }
  }, []);

  const setHeaderOptions = () => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.addButton}
          onPress={() => navigation.navigate('ProductScreen', {})}
        >
          <Icon
            name="add-outline"
            size={30}
            color="rgba(255, 193, 36, 1)"
            style={{ marginLeft: 1 }}
          />
        </TouchableOpacity>
      )
    });
  };

  const loadProductsOnPull = async () => {
    if (!isMounted) return;

    setIsRefreshing(true);
    await loadProducts();
    setIsRefreshing(false);
    setIsDeleting(false);
  };

  const deleteProductOnPush = async (id: string) => {
    if (!isMounted) return;

    setIsDeleting(true);
    await deleteProduct(id);
    setIsDeleting(false);
  };

  return (
    <View style={{ flex: 1, marginHorizontal: 10, paddingTop: 15 }}>
      <SwipeListView
        data={products}
        keyExtractor={(p) => p._id}
        renderItem={({ item }) => (<ListItem item={item} />)}
        renderHiddenItem={({ item }) => (
          <HiddenItem
            deleteProductOnPush={deleteProductOnPush}
            itemId={item._id}
            isDeleting={isDeleting}
          />
        )}
        disableRightSwipe
        disableLeftSwipe={isDeleting}
        rightOpenValue={-55}
        ItemSeparatorComponent={() => (<View style={styles.itemSeparator} />)}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={loadProductsOnPull}
            progressViewOffset={10}
            progressBackgroundColor={"white"}
            colors={['rgba(208, 171, 0, 0.9)', 'orange']}
          />
        }
      />
      <TouchableOpacity
        activeOpacity={1}
        onPress={logOut}
        style={styles.logoutIcon}
      >
        <Icon
          name="log-out-outline"
          size={25}
          color="white"
          style={{ marginLeft: 3 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productName: {
    paddingTop: 3.5,
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 20,
    height: 35,
  },
  itemSeparator: {
    marginVertical: 0,
    borderBottomColor: 'rgba(208, 171, 0, 0.9)',
  },
  addButton: {
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5
  },
  logoutIcon: {
    // backgroundColor: 'rgba(255, 204, 0, 0.85)',
    borderRadius: 100,
    height: 40,
    width: 40,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderWidth: 2,
    borderColor: 'rgba(255, 204, 0, 0.85)',
  }

});
