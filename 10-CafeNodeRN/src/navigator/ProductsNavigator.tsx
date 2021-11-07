import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { ProductsScreen } from '../screens/ProductsScreen';
import { ProductScreen } from '../screens/ProductScreen';
import { Animated, View } from 'react-native';

const TransitionScreenOptions = {
  // ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
  ...TransitionPresets.ModalFadeTransition, // This is where the transition happens
};

export type ProductsStackParams = {
  ProductsScreen: undefined,
  ProductScreen: { id?: string, name?: string }
};

const Stack = createStackNavigator();

export const ProductsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionScreenOptions,
        cardStyle: {
          backgroundColor: 'rgb(4, 16, 33)',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        headerTintColor: 'white',
        headerBackground: () => <View style={{ backgroundColor: 'rgba(255, 204, 0, 0.8)', height: '100%' }} />,
        cardOverlay: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgb(4, 16, 33)',
            }}
          />),
      }}
    >
      <Stack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{ title: 'Products' }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ title: 'Product' }}
      />
    </Stack.Navigator>
  )
}
