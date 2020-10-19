import { IColor, ITheme } from '../../interfaces/ui.interfaces';

const color: IColor = {
  white: '#FFF',
  black: '#000',
  blue: '#0089A5',
  grey: '#8FA7B3',
  green: '#37C77F',
  light_red: '#FFBCD4',
  red: '#FF669D',
  light_blue: '#15C3D6',
  title: '#4D6F80',
  description: '#5C8599',
  border_color: '#B3DAE2',
  border_color_green: '#A1E9C5',
  background: '#E6F7FB',
  background_green: '#3CDC8C',
  background_red: '#FEF6F9',
  green_item_background: '#EDFFF6',
};

const name = 'default';

export const theme: ITheme = {
  name,
  color,
};
