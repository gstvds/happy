import { App } from '../../app';
import { Orphanage } from '../../interfaces/orphanages.interfaces';

export const ORPHANAGES = App.State<Orphanage[]>([]);
