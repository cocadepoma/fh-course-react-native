import React from 'react';

import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   dark: false,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: string;
//     // background: string;
//     // card: string;
//     // text: string;
//     // border: string;
//     // notification: string;
//   }
// };

const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default App;