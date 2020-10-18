import { IColor, ITheme } from '../../interfaces/ui.interfaces';

const color: IColor = {
  white: '#FFF',
  black: '#000',
  blue: '#0089A5',
  grey: '#8FA7B3',
  light_blue: '#15C3D6',
};

const name = 'default';

export const theme: ITheme = {
  name,
  color,
};
