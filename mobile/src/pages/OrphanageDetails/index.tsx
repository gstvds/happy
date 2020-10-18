import React from 'react';
import { ScrollView } from 'react-native';
import { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { ThemeProvider } from 'styled-components/native';
import { usePulse } from '@pulsejs/react';
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
  ScheduleTextBlue,
  ScheduleTextGreen,
  Separator,
  Title,
} from './styles';
import core from '../../../core';

const OrphanageDetails: React.FC = () => {
  const [theme] = usePulse([core.ui.state.THEME]);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ImagesContainer>
          <ScrollView horizontal pagingEnabled>
            <Image
              source={{
                uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
              }}
            />
            <Image
              source={{
                uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
              }}
            />
            <Image
              source={{
                uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
              }}
            />
          </ScrollView>
        </ImagesContainer>

        <DetailsContainer>
          <Title>Orf. Esperança</Title>
          <Description>
            Presta assistência a crianças de 06 a 15 anos que se encontre em
            situação de risco e/ou vulnerabilidade social.
          </Description>

          <MapContainer>
            <Map
              initialRegion={{
                latitude: -27.2092052,
                longitude: -49.6401092,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008,
              }}
              zoomEnabled={false}
              pitchEnabled={false}
              scrollEnabled={false}
              rotateEnabled={false}
            >
              <Marker
                icon={mapMarkerImg}
                coordinate={{
                  latitude: -27.2092052,
                  longitude: -49.6401092,
                }}
              />
            </Map>

            <RoutesContainer>
              <RoutesText>Ver rotas no Google Maps</RoutesText>
            </RoutesContainer>
          </MapContainer>

          <Separator />

          <Title>Instruções para visita</Title>
          <Description>
            Venha como se sentir a vontade e traga muito amor e paciência para
            dar.
          </Description>

          <ScheduleContainer>
            <ScheduleItemBlue>
              <Feather name="clock" size={40} color="#2AB5D1" />
              <ScheduleTextBlue>Segunda à Sexta 8h às 18h</ScheduleTextBlue>
            </ScheduleItemBlue>
            <ScheduleItemGreen>
              <Feather name="info" size={40} color="#39CC83" />
              <ScheduleTextGreen>Atendemos fim de semana</ScheduleTextGreen>
            </ScheduleItemGreen>
          </ScheduleContainer>

          <ContactButton onPress={() => {}}>
            <FontAwesome name="whatsapp" size={24} color="#FFF" />
            <ContactButtonText>Entrar em contato</ContactButtonText>
          </ContactButton>
        </DetailsContainer>
      </Container>
    </ThemeProvider>
  );
};

export default OrphanageDetails;
