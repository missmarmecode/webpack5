import Eagle from './eagle.jpg';
import './eagle-image.scss';

class EagleImage {
    render() {
        const img = document.createElement('img');
        img.src = Eagle;
        img.alt = 'Eagle';
        img.classList.add('eagle-image');
        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
    }
}

export default EagleImage;
