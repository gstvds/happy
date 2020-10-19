import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { RectButton } from 'react-native-gesture-handler';

import fonts from '../../../helpers/fonts';
import { ITheme } from '../../../../core/interfaces/ui.interfaces';

interface Themed {
  theme: ITheme;
}

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const Map = styled(MapView)`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;

export const NextButton = styled(RectButton)`
  background-color: #15c3d6;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  height: 56px;

  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 40px;
`;

export const NextButtonText = styled.Text<Themed>`
  font-family: ${fonts.nunito_bold};
  font-size: 16px;
  color: ${props => props.theme.color.white};
`;
