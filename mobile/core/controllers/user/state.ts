import { App } from '../../app';
import { ILocation } from '../../interfaces/user.interface';

export const USER_LOCATION = App.State<number[]>([
  -22.5720593,
  -47.4018399,
]).persist('USER_LOCATION');

export const CREATE_LOCATION = App.State<ILocation>({
  latitude: 0,
  longitude: 0,
});
