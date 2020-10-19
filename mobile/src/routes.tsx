import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#f2f3f5' },
      }}
    >
      <Screen name="OrphanagesMap" component={OrphanagesMap} />
      <Screen
        options={{
          headerShown: true,
          header: () => <Header title="Orfanato" showCancel={false} />,
        }}
        name="OrphanageDetails"
        component={OrphanageDetails}
      />

      <Screen
        options={{
          headerShown: true,
          header: () => <Header title="Selecione no Mapa" />,
        }}
        name="SelectMapPosition"
        component={SelectMapPosition}
      />
      <Screen
        options={{
          headerShown: true,
          header: () => <Header title="Informe os Dados" />,
        }}
        name="OrphanageData"
        component={OrphanageData}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
