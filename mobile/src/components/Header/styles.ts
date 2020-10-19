import styled from 'styled-components/native';
import Constants from 'expo-constants';

import fonts from '../../helpers/fonts';
import { ITheme } from '../../../core/interfaces/ui.interfaces';

interface Themed {
  theme: ITheme;
}

export const Container = styled.View`
  padding: 24px;
  background-color: #f9fafc;
  border-bottom-width: 1px;
  border-color: #dde3f0;
  padding-top: ${Constants.statusBarHeight + 14}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text<Themed>`
  font-family: ${fonts.nunito_semibold};
  color: ${props => props.theme.color.grey};
  font-size: 16px;
`;
