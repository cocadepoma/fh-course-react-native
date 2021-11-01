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
          backgroundColor: 'rgba(250, 235, 194, 0.7)',
        },
        headerStyle: {
          elevation: 10,
          // shadowColor: 'transparent',
        },
        headerTintColor: 'white',
        headerBackground: () => <View style={{ backgroundColor: 'rgba(68, 65, 59, 1)', height: '100%' }} />,
        cardOverlay: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(68, 65, 59, 0.4)',
            }}
          />),
      }}
    >
      <Stack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{ title: 'Productos' }}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{ title: 'Producto' }}
      />
    </Stack.Navigator>
  )
}
