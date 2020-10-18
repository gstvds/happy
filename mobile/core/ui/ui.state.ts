import { App } from '../app';
import { theme } from './theme';
import { ITheme, BarStyle } from '../interfaces/ui.interfaces';

export const THEME = App.State<ITheme>(theme).persist('THEME');
export const STATUS_BAR = App.State<BarStyle>('auto').persist('STATUS_BAR');
