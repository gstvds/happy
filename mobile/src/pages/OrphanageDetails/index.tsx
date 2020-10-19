import React from 'react';
import { ScrollView, View, Linking } from 'react-native';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { usePulse } from '@pulsejs/react';
import { useRoute } from '@react-navigation/native';

import mapMarkerImg from '../../images/map-marker.png';

import {
  ContactButton,
  ContactButtonText,
  Container,
  Description,
  DetailsContainer,
  Image,
  ImagesContainer,
  Map,
  MapContainer,
  RoutesContainer,
  RoutesText,
  ScheduleContainer,
  ScheduleItemBlue,
  ScheduleItemGreen,
  ScheduleItemRed,
  ScheduleTextBlue,
  ScheduleTextGreen,
  ScheduleTextRed,
  Separator,
  Title,
} from './styles';

import core from '../../../core';

const OrphanageDetails: React.FC = () => {
  const [orphanages] = usePulse([core.orphanages.state.ORPHANAGES]);
  const { params } = useRoute() as { params: { orphanage: number } };

  const handleWhatsApp = () => {
    Linking.openURL(
      `https://api.whatsapp.com/send?1=pt_br&phone=${
        orphanages[params.orphanage].whatsapp
      }`,
    );
  };

  const handleOpenMaps = () => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${
        orphanages[params.orphanage].latitude
      },${orphanages[params.orphanage].longitude}`,
    );
  };

  if (!params) return <View />;
  return (
    <Container>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          {orphanages[params.orphanage].images.map(image => (
            <Image
              key={image.id}
              source={{
                uri: image.url,
              }}
            />
          ))}
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{orphanages[params.orphanage].name}</Title>
        <Description>{orphanages[params.orphanage].about}</Description>

        <MapContainer>
          <Map
            initialRegion={{
              latitude: orphanages[params.orphanage].latitude,
              longitude: orphanages[params.orphanage].longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            provider={PROVIDER_GOOGLE}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: orphanages[params.orphanage].latitude,
                longitude: orphanages[params.orphanage].longitude,
              }}
            />
          </Map>

          <RoutesContainer onPress={handleOpenMaps}>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>{orphanages[params.orphanage].instructions}</Description>

        <ScheduleContainer>
          <ScheduleItemBlue>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ScheduleTextBlue>
              {`Segunda à Sexta ${orphanages[params.orphanage].opening_hours}`}
            </ScheduleTextBlue>
          </ScheduleItemBlue>
          {orphanages[params.orphanage].open_on_weekends ? (
            <ScheduleItemGreen>
              <Feather name="info" size={40} color="#39CC83" />
              <ScheduleTextGreen>Atendemos fim de semana</ScheduleTextGreen>
            </ScheduleItemGreen>
          ) : (
            <ScheduleItemRed>
              <Feather name="info" size={40} color="#FF669D" />
              <ScheduleTextRed>Não atendemos fim de semana</ScheduleTextRed>
            </ScheduleItemRed>
          )}
        </ScheduleContainer>

        {orphanages[params.orphanage].whatsapp && (
          <ContactButton onPress={handleWhatsApp}>
            <FontAwesome name="whatsapp" size={24} color="#FFF" />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        )}
      </DetailsContainer>
    </Container>
  );
};

export default OrphanageDetails;
