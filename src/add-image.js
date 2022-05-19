import Eagle from './eagle.jpg';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Eagle';
    img.width = 300;
    img.src = Eagle;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;