import Image from 'models/Image';

interface ImageReturn {
  id: number;
  url: string;
}

export default {
  render(image: Image): ImageReturn {
    return {
      id: image.id,
      url: `http://192.168.0.19:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]): ImageReturn[] {
    return images.map(image => this.render(image));
  },
};
