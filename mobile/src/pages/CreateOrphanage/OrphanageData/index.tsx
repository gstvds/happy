import React from 'react';
import { Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { usePulse } from '@pulsejs/react';

import { ThemeProvider } from 'styled-components/native';
import {
  Container,
  Title,
  Label,
  Input,
  SwitchContainer,
  ImagesInput,
  NextButton,
  NextButtonText,
} from './styles';

const OrphanageData: React.FC = () => {
  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <Title>Dados</Title>

      <Label>Nome</Label>
      <Input />

      <Label>Sobre</Label>
      <Input style={{ height: 110 }} multiline />

      <Label>Whatsapp</Label>
      <Input />

      <Label>Fotos</Label>
      <ImagesInput onPress={() => {}}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </ImagesInput>

      <Title>Visitação</Title>

      <Label>Instruções</Label>
      <Input style={{ height: 110 }} multiline />

      <Label>Horario de visitas</Label>
      <Input />

      <SwitchContainer>
        <Label>Atende final de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
        />
      </SwitchContainer>

      <NextButton onPress={() => {}}>
        <NextButtonText>Cadastrar</NextButtonText>
      </NextButton>
    </Container>
  );
};

export default OrphanageData;
