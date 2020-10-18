export interface IColor {
  white: string;
  black: string;
  blue: string;
  green: string;
  light_blue: string;
  grey: string;
  title: string;
  description: string;
  border_color: string;
  border_color_green: string;
  background: string;
  background_green: string;
  green_item_background: string;
}

export interface ITheme {
  name: string;
  color: IColor;
}

export type BarStyle = 'auto' | 'dark' | 'light';
