import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';

import CalculatorScreen from './src/screens/CalculatorScreen';

import { appStyles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={appStyles.background}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
