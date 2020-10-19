import React, { useEffect } from 'react';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { usePulse } from '@pulsejs/react';
import { ThemeProvider } from 'styled-components/native';

import {
  Container,
  Map,
  CalloutContainer,
  CalloutText,
  Footer,
  FooterText,
  CreateOrphanageButton,
} from './styles';

import mapMarker from '../../images/map-marker.png';

import {
  ORPHANAGE_DETAILS_PAGE,
  SELECT_MAP_POSITION_PAGE,
} from '../../helpers/routes';
import core from '../../../core';

const OrphanagesMap: React.FC = () => {
  const [theme] = usePulse([core.ui.state.THEME]);
  const navigation = useNavigation();

  useEffect(() => {
    core.ui.setStatusBar('dark');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Map
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: -22.5542445,
            longitude: -47.446738,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
        >
          <Marker
            coordinate={{
              latitude: -22.5542445,
              longitude: -47.446738,
            }}
            icon={mapMarker}
            calloutAnchor={{
              x: 2.2,
              y: 0.7,
            }}
          >
            <Callout
              tooltip
              onPress={() => navigation.navigate(ORPHANAGE_DETAILS_PAGE)}
            >
              <CalloutContainer>
                <CalloutText>Lar Doce Lar</CalloutText>
              </CalloutContainer>
            </Callout>
          </Marker>
        </Map>

        <Footer
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.5,
          }}
        >
          <FooterText>2 orfanatos encontrados</FooterText>

          <CreateOrphanageButton
            onPress={() => navigation.navigate(SELECT_MAP_POSITION_PAGE)}
          >
            <Feather name="plus" size={20} color="#FFF" />
          </CreateOrphanageButton>
        </Footer>
      </Container>
    </ThemeProvider>
  );
};

export default OrphanagesMap;
