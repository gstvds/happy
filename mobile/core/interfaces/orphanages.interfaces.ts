export interface Orphanage {
  id: number;
  name: string;
  description: string;
  instructions: string;
  open_on_weekends: string;
  opening_hours: string;
  latitude: number;
  longitude: number;
  whatsapp: string;
  images: Array<{
    url: string;
    id: number;
  }>;
}
