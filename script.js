let draggableImages = document.querySelectorAll('.img-option');
let chestImage = document.getElementById('chestImage');
let shirtImage = document.getElementById('shirtImage');
let largeImageContainer = document.getElementById('largeImage');
let headerInput = document.getElementById('headerText');
let warningText = document.getElementById('warning');
let headerTextDisplay = document.getElementById('headerTextDisplay');
let imageNameDisplay = document.getElementById('imageName');

draggableImages.forEach(img => {
    img.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', e.target.src);
    });
});

function onDrop(e) {
    e.preventDefault();
    let imgSource = e.dataTransfer.getData('text/plain');

    chestImage.src = imgSource;
    chestImage.style.width = '70px';
    chestImage.style.height = '60px';
    chestImage.style.marginTop = '200px';
    chestImage.style.marginLeft = '100px';
    chestImage.style.transform = 'scaleX(-1)';

    largeImageContainer.innerHTML = '';

    let img = document.createElement('img');
    img.src = imgSource;
    img.style.width = '130px';
    img.style.height = 'auto';
    img.style.marginTop = '130px';
    img.alt = 'Imagen central';
    img.className = 'img-fluid';
    largeImageContainer.appendChild(img);

    let imgFileName = imgSource.split('/').pop().split('.')[0];
    imageNameDisplay.textContent = imgFileName;
}

document.querySelector('.shirt-display').addEventListener('dragover', function (e) {
    e.preventDefault();
});

document.querySelector('.shirt-display').addEventListener('drop', onDrop);

shirtImage.addEventListener('dragover', function (e) {
    e.preventDefault();
});

shirtImage.addEventListener('drop', onDrop);

headerInput.addEventListener('input', function () {
    headerTextDisplay.textContent = headerInput.value || 'Encabezado';
});

let xPosition = document.getElementById('xPosition');
let yPosition = document.getElementById('yPosition');

headerTextDisplay.style.position = 'absolute';

xPosition.addEventListener('input', function () {
    headerTextDisplay.style.left = `${xPosition.value}px`;
});

yPosition.addEventListener('input', function () {
    headerTextDisplay.style.top = `${yPosition.value}px`;
});

let shirtColorOptions = document.querySelectorAll('input[name="shirtColor"]');
shirtColorOptions.forEach(input => {
    input.addEventListener('change', function () {
        shirtImage.src = this.value === 'white' ? 'img/white.png' : 'img/black.png';
    });
});
