import { App } from '../../app';
import { IOrphanage } from '../../interfaces/orphanages.interfaces';

export const ORPHANAGES = App.State<IOrphanage[]>([]);
