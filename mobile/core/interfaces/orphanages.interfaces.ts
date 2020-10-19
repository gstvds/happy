export interface IOrphanage {
  id: number;
  name: string;
  about: string;
  instructions: string;
  open_on_weekends: boolean;
  opening_hours: string;
  latitude: number;
  longitude: number;
  whatsapp?: string;
  images: Array<{
    url: string;
    id: number;
  }>;
}
