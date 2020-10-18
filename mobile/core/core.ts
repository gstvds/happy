import { App } from './app';
import ui from './ui';

const core = {
  ui,
};

export default App.Core(core);

export type ICore = typeof core;
