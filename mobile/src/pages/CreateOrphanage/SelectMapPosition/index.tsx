import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { Container, Map, NextButton, NextButtonText } from './styles';

import mapMarkerImg from '../../../images/map-marker.png';

import { ORPHANAGE_DATA_PAGE } from '../../../helpers/routes';

const SelectMapPosition: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Map
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        provider={PROVIDER_GOOGLE}
      >
        <Marker
          icon={mapMarkerImg}
          coordinate={{ latitude: -27.2092052, longitude: -49.6401092 }}
        />
      </Map>

      <NextButton onPress={() => navigation.navigate(ORPHANAGE_DATA_PAGE)}>
        <NextButtonText>Próximo</NextButtonText>
      </NextButton>
    </Container>
  );
};

export default SelectMapPosition;
