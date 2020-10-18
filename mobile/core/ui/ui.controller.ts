import { App } from '../app';
import * as state from './ui.state';
import * as actions from './ui.actions';

const controller = App.Controller({
  state: { ...state },
}).root(actions);

export const ui = controller as typeof controller & typeof actions;
