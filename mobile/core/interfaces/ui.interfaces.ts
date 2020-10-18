export interface IColor {
  white: string;
  black: string;
  blue: string;
  light_blue: string;
  grey: string;
}

export interface ITheme {
  name: string;
  color: IColor;
}

export type BarStyle = 'auto' | 'dark' | 'light';
