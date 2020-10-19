import core from '../core';
import api from './api';

export const getOrphanages = async (): Promise<void> => {
  const response = await api.get('orphanages');

  core.orphanages.state.ORPHANAGES.set(response.data);
};
