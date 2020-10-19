import { USER_LOCATION, CREATE_LOCATION } from './state';

interface Location {
  latitude: number;
  longitude: number;
}

export function addLocation(location: Location): void {
  const { latitude, longitude } = location;
  USER_LOCATION.set([latitude, longitude]);
}

export function newLocation(location: Location): void {
  CREATE_LOCATION.set(location);
}
