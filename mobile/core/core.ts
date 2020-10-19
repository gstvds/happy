import { App } from './app';
import ui from './ui';
import orphanages from './controllers/orphanages';

const core = {
  ui,
  orphanages,
};

export default App.Core(core);

export type ICore = typeof core;
