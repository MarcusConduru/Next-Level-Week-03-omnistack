import Image from '../models/Image';

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `http://192.168.1.3:3333/uploads/${image.path}`,//ip da maquina
        };
    },
    
    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
} 