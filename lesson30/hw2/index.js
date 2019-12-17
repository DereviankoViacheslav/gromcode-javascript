import { addImage } from './addImage.js';

function addImageV2(imgSrc) {
    return new Promise((resolve, reject) => {
        addImage(imgSrc, (error, data) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(data);
        })
    });
};

// addImageV2('https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg')
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

export { addImageV2 };
