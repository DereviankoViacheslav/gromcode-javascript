
// function addImage(imgSrc, callback) {
export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    function onImageLoaded() {
        const { width, height } = imgElem;
        callback(null, { width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () => callback('Image load failed'));
};

const onImageLoaded = (error, data) => {
    // function onImageLoaded(error, data) {
    if (error) {
        console.log(error);
        return;
    }
    const { width, height } = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
};

const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';

addImage(imgSrc, onImageLoaded);
// export { addImage };