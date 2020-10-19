import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { usePulse } from '@pulsejs/react';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import {
  Container,
  Title,
  Label,
  Input,
  SwitchContainer,
  ImagesInput,
  NextButton,
  NextButtonText,
  UploadedImagesContainer,
  UploadedImage,
} from './styles';

import core from '../../../../core';
import { createOrphanage } from '../../../../core/controllers/orphanages/routes';
import { ORPHANAGES_MAP_PAGE } from '../../../helpers/routes';

const OrphanageData: React.FC = () => {
  const navigation = useNavigation();
  const [location] = usePulse([core.user.state.CREATE_LOCATION]);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<string[]>([]);

  const handleCreateOrphanage = async () => {
    const create = await createOrphanage({
      name,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      latitude: location.latitude,
      longitude: location.longitude,
      images,
    });

    console.log(create);

    navigation.navigate(ORPHANAGES_MAP_PAGE);
  };

  const handleSelectImages = async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      alert('Precisamos de acesso às suas fotos para.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      const image = result.uri;
      setImages([...images, image]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container contentContainerStyle={{ padding: 24 }}>
        <Title>Dados</Title>

        <Label>Nome</Label>
        <Input value={name} onChangeText={setName} />

        <Label>Sobre</Label>
        <Input
          value={about}
          onChangeText={setAbout}
          style={{ height: 110 }}
          multiline
        />

        {/* <Label>Whatsapp</Label>
      <Input /> */}

        <Label>Fotos</Label>
        <UploadedImagesContainer>
          {images.map(image => (
            <UploadedImage key={image} source={{ uri: image }} />
          ))}
        </UploadedImagesContainer>
        <ImagesInput onPress={handleSelectImages}>
          <Feather name="plus" size={24} color="#15B6D6" />
        </ImagesInput>

        <Title>Visitação</Title>

        <Label>Instruções</Label>
        <Input
          value={instructions}
          onChangeText={setInstructions}
          style={{ height: 110 }}
          multiline
        />

        <Label>Horario de visitas</Label>
        <Input value={opening_hours} onChangeText={setOpeningHours} />

        <SwitchContainer>
          <Label>Atende final de semana?</Label>
          <Switch
            thumbColor="#fff"
            trackColor={{ false: '#ccc', true: '#39CC83' }}
            value={open_on_weekends}
            onValueChange={setOpenOnWeekends}
          />
        </SwitchContainer>

        <NextButton onPress={handleCreateOrphanage}>
          <NextButtonText>Cadastrar</NextButtonText>
        </NextButton>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default OrphanageData;
