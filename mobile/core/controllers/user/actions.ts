import { USER_LOCATION } from './state';

interface Location {
  latitude: number;
  longitude: number;
}

export function addLocation(location: Location): void {
  const { latitude, longitude } = location;
  USER_LOCATION.set([latitude, longitude]);
}
