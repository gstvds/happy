import { App } from './app';
import ui from './ui';
import orphanages from './controllers/orphanages';
import user from './controllers/user';

const core = {
  ui,
  orphanages,
  user,
};

export default App.Core(core);

export type ICore = typeof core;
