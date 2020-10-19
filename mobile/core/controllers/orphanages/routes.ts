import api from '../../api/api';
import { IOrphanage } from '../../interfaces/orphanages.interfaces';

interface CreateOrphanage extends Omit<IOrphanage, 'id' | 'images'> {
  images: any[];
}

export async function createOrphanage(
  orphanage: CreateOrphanage,
): Promise<IOrphanage> {
  const data = new FormData();

  data.append('name', orphanage.name);
  data.append('about', orphanage.about);
  data.append('instructions', orphanage.instructions);
  data.append('latitude', String(orphanage.latitude));
  data.append('longitude', String(orphanage.longitude));
  data.append('opening_hours', orphanage.opening_hours);
  data.append('open_on_weekends', String(orphanage.open_on_weekends));

  orphanage.images.map((image, index) =>
    data.append('images', {
      type: 'image/jpg',
      uri: image,
      name: `image_${index}.jpg`,
    } as any),
  );
  const create = await api.post('orphanages', data);

  return create.data;
}
