export interface IColor {
  white: string;
  black: string;
  blue: string;
  green: string;
  red: string;
  light_red: string;
  light_blue: string;
  grey: string;
  title: string;
  description: string;
  border_color: string;
  border_color_green: string;
  background: string;
  background_green: string;
  background_red: string;
  green_item_background: string;
}

export interface ITheme {
  name: string;
  color: IColor;
}

export type BarStyle = 'auto' | 'dark' | 'light';
