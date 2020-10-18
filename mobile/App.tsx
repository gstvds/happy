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

import Routes from './src/routes';
import core from './core';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_600SemiBold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator color="#000" />;
  }
  return (
    <>
      <StatusBar style={core.ui.state.STATUS_BAR.value} />
      <Routes />
    </>
  );
};

export default App;
