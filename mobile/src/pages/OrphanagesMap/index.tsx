import React from 'react';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

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

const OrphanagesMap: React.FC = () => {
  return (
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
          <Callout tooltip onPress={() => {}}>
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

        <CreateOrphanageButton onPress={() => {}}>
          <Feather name="plus" size={20} color="#FFF" />
        </CreateOrphanageButton>
      </Footer>
    </Container>
  );
};

export default OrphanagesMap;
