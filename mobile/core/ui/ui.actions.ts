import { STATUS_BAR } from './ui.state';

type BarStyle = 'auto' | 'dark' | 'light';

export function setStatusBar(style: BarStyle): void {
  STATUS_BAR.set(style);
}
