import { App } from '../../app';
import * as state from './state';
import * as actions from './actions';

const controller = App.Controller({
  state: { ...state },
}).root(actions);

export default controller as typeof controller & typeof actions;
