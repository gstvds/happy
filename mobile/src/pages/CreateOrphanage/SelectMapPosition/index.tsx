import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { MapEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { usePulse } from '@pulsejs/react';

import { Container, Map, NextButton, NextButtonText } from './styles';

import mapMarkerImg from '../../../images/map-marker.png';

import { ORPHANAGE_DATA_PAGE } from '../../../helpers/routes';
import core from '../../../../core';

const SelectMapPosition: React.FC = () => {
  const [location] = usePulse([core.user.state.CREATE_LOCATION]);
  const navigation = useNavigation();

  const handleSelectMapPosition = (event: MapEvent) => {
    core.user.newLocation(event.nativeEvent.coordinate);
  };

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
        onPress={handleSelectMapPosition}
      >
        {location.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        )}
      </Map>

      {location.latitude !== 0 && (
        <NextButton onPress={() => navigation.navigate(ORPHANAGE_DATA_PAGE)}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      )}
    </Container>
  );
};

export default SelectMapPosition;
