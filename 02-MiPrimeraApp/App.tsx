import React from 'react';
import { SafeAreaView } from 'react-native';
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import { CounterSceen } from './src/screens/CounterSceen';
import { FlexScreen } from './src/screens/FlexScreen';

import HolaMundoScreen from './src/screens/HolaMundoScreen';
import { MeasuresScreen } from './src/screens/MeasuresScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HolaMundoScreen /> */}
      {/* <CounterSceen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <MeasuresScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

export default App;
