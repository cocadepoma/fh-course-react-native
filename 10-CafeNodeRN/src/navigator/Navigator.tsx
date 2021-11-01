import React, { useContext } from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import ProtectedScreen from '../screens/ProtectedScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';
import { ProductsNavigator } from './ProductsNavigator';

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
};

const Stack = createStackNavigator();

const Navigator = () => {
  const { status } = useContext(AuthContext);
  if (status === 'checking') {
    return <LoadingScreen />
  }
  return (
    <Stack.Navigator
      screenOptions={{
        ...optionsStack,
        ...TransitionScreenOptions,
      }}
    >
      {
        status !== 'authenticated'
          ? (
            <>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen options={{ ...optionsRegisterScreen }} name="RegisterScreen" component={RegisterScreen} />
            </>
          )
          : (
            <>
              <Stack.Screen name="ProductsNavigator" component={ProductsNavigator} />
              <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
            </>
          )
      }

    </Stack.Navigator>
  );
};

export default Navigator;


const optionsStack = {
  headerShown: false,
  cardStyle: {
    backgroundColor: '#F0C300',
  },
  // cardOverlay: () => (
  //     <View
  //         style={{
  //             flex: 1,
  //             backgroundColor: '#44413b',
  //         }}
  //     />)
};

const optionsRegisterScreen = {
  headerShown: false,
  cardStyle: {
    backgroundColor: '#0E0047',
  }
};