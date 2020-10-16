import Image from 'models/Image';

interface ImageReturn {
  id: number;
  url: string;
}

export default {
  render(image: Image): ImageReturn {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]): ImageReturn[] {
    return images.map(image => this.render(image));
  },
};
