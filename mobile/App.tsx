import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import {
  useFonts,
  Nunito_700Bold,
  Nunito_600SemiBold,
  Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito';
import { usePulse } from '@pulsejs/react';

import { ThemeProvider } from 'styled-components/native';

import Routes from './src/routes';
import core from './core';

const App: React.FC = () => {
  const [statusBar, theme] = usePulse([
    core.ui.state.STATUS_BAR,
    core.ui.state.THEME,
  ]);
  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_600SemiBold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator color="#000" />;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style={statusBar} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
