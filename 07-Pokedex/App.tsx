import 'react-native-gesture-handler';
import React from 'react';
import Tabs from './src/navigator/Tabs';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;