import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { ITheme } from '../../../../core/interfaces/ui.interfaces';
import fonts from '../../../helpers/fonts';

interface Themed {
  theme: ITheme;
}

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  color: #5c8599;
  font-size: 24px;
  font-family: ${fonts.nunito_bold};
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom-width: 0.8px;
  border-bottom-color: #d3e2e6;
`;

export const Label = styled.Text<Themed>`
  color: ${props => props.theme.color.grey};
  font-family: ${fonts.nunito_semibold};
  margin-bottom: 8px;
`;

export const Comment = styled.Text<Themed>`
  font-size: 11px;
  color: ${props => props.theme.color.grey};
`;

export const Input = styled.TextInput<Themed>`
  background-color: ${props => props.theme.color.white};
  border-width: 1.4px;
  border-color: #d3e2e6;
  border-radius: 20px;
  height: 56px;
  padding-vertical: 18px;
  padding-horizontal: 24px;
  margin-bottom: 16px;
  text-align-vertical: top;
`;

export const ImagesInput = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.5);
  border-style: dashed;
  border-color: #96d2f0;
  border-width: 1.4px;
  border-radius: 20px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const SwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const NextButton = styled(RectButton)`
  background-color: #15c3d6;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 32px;
`;

export const NextButtonText = styled.Text<Themed>`
  font-family: ${fonts.nunito_extrabold};
  font-size: 16px;
  color: ${props => props.theme.color.white};
`;
