import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

import { ITheme } from '../../../core/interfaces/ui.interfaces';
import fonts from '../../helpers/fonts';

interface Themed {
  theme: ITheme;
}

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ImagesContainer = styled.View`
  height: 240px;
`;

export const Image = styled.Image`
  width: ${Dimensions.get('window').width}px;
  height: 240px;
  resize-mode: cover;
`;

export const DetailsContainer = styled.View`
  padding: 24px;
`;

export const Title = styled.Text<Themed>`
  color: ${props => props.theme.color.title};
  font-size: 30px;
  font-family: ${fonts.nunito_bold};
`;

export const Description = styled.Text<Themed>`
  font-family: ${fonts.nunito_bold};
  color: ${props => props.theme.color.description};
  line-height: 24px;
  margin-top: 16px;
`;

export const MapContainer = styled.View<Themed>`
  border-radius: 20px;
  overflow: hidden;
  border-width: 1.2px;
  border-color: ${props => props.theme.color.border_color};
  margin-top: 40px;
  background-color: ${props => props.theme.color.background};
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 150px;
`;

export const RoutesContainer = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const RoutesText = styled.Text<Themed>`
  font-family: ${fonts.nunito_bold};
  color: ${props => props.theme.color.blue};
`;

export const Separator = styled.View<Themed>`
  height: 0.8px;
  width: 100%;
  background-color: ${props => props.theme.color.background};
  margin-vertical: 40px;
`;

export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ScheduleItemBlue = styled.View<Themed>`
  width: 48%;
  padding: 20px;
  background-color: ${props => props.theme.color.background};
  border-width: 1px;
  border-color: ${props => props.theme.color.border_color};
  border-radius: 20px;
`;

export const ScheduleItemGreen = styled.View<Themed>`
  width: 48%;
  padding: 20px;
  background-color: ${props => props.theme.color.green_item_background};
  border-width: 1px;
  border-color: ${props => props.theme.color.border_color_green};
  border-radius: 20px;
`;

export const ScheduleItemRed = styled.View<Themed>`
  width: 48%;
  padding: 20px;
  background-color: ${props => props.theme.color.background_red};
  border-width: 1px;
  border-color: ${props => props.theme.color.light_red};
  border-radius: 20px;
`;

export const ScheduleTextBlue = styled.Text<Themed>`
  font-family: ${fonts.nunito_semibold};
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  color: ${props => props.theme.color.description};
`;

export const ScheduleTextGreen = styled.Text<Themed>`
  font-family: ${fonts.nunito_semibold};
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  color: ${props => props.theme.color.green};
`;

export const ScheduleTextRed = styled.Text<Themed>`
  font-family: ${fonts.nunito_semibold};
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  color: ${props => props.theme.color.red};
`;

export const ContactButton = styled(RectButton)`
  background-color: #3cdc8c;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 40px;
`;

export const ContactButtonText = styled.Text<Themed>`
  font-family: ${fonts.nunito_extrabold};
  color: ${props => props.theme.color.white};
  font-size: 16px;
  margin-left: 16;
`;
