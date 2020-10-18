import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import fonts from '../../helpers/fonts';

import { ITheme } from '../../../core/interfaces/ui.interfaces';

interface Themed {
  theme: ITheme;
}

export const Container = styled.View`
  flex: 1;
`;

export const Map = styled(MapView)`
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;

export const CalloutContainer = styled.View`
  width: 160px;
  height: 46px;
  padding-horizontal: 16px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  justify-content: center;
`;

export const CalloutText = styled.Text<Themed>`
  color: ${props => props.theme.color.blue};
  font-size: 14px;
  font-family: ${fonts.nunito_bold};
`;

export const Footer = styled.View<Themed>`
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 32px;

  background-color: ${props => props.theme.color.white};
  border-radius: 20px;
  height: 56px;
  padding-left: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  elevation: 3;
`;

export const FooterText = styled.Text<Themed>`
  color: ${props => props.theme.color.grey};
  font-family: ${fonts.nunito_bold};
`;

export const CreateOrphanageButton = styled.TouchableOpacity<Themed>`
  width: 56px;
  height: 56px;
  background-color: ${props => props.theme.color.light_blue};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
