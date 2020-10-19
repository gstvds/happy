import { App } from '../../app';
import * as state from './state';

const controller = App.Controller({
  state: { ...state },
});

export default controller;
