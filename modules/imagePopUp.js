/*Copyright 2023 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0*/
const imageArr = document.querySelectorAll('.item-img');
const popUpFrame = document.querySelector('.pop-up-frame');
const exitButton = document.querySelector('.pop-up-exit-button');
const zoomedImg = document.querySelector('.zoomed-img');

const setImage = (target) => {
    if (target.dataset.prod === 'flatNatBornGiller') {
        zoomedImg.src = './style/images/bluegill.jpg';
    }
    if (target.dataset.prod === 'crankNatBornGiller') {
        zoomedImg.src = './style/images/bluegill-squarebill.jpg';
    }
    if (target.dataset.prod === 'invertNatBornGiller') {
        zoomedImg.src = './style/images/c_invertED_NatBornGiller.jpeg';
    }
    if (target.dataset.prod === 'fireCraw') {
        zoomedImg.src = './style/images/new_firecraw.jpg';
    }
    if (target.dataset.prod === 'goldenShad') {
        zoomedImg.src = './style/images/Golden-Shad.jpg';
    }
    if (target.dataset.prod === 'picklebackMedium') {
        zoomedImg.src = './style/images/c_PickleFlat2.jpg';
    }
    if (target.dataset.prod === 'picklebackFlat') {
        zoomedImg.src = './style/images/c_PicklePlopper2_Medium.jpeg';
    }
    if (target.dataset.prod === 'solarfall') {
        zoomedImg.src = './style/images/c_Solarfall.jpg';
    }
    if (target.dataset.prod === 'm450') {
        zoomedImg.src = './style/images/c_Ian_M450.jpeg';
    }
    if (target.dataset.prod === 'tsaKoozie') {
        zoomedImg.src = './style/images/c_TSA_Koozie.jpeg';
    }
    if (target.dataset.prod === 'tsaHatBlack') {
        zoomedImg.src = './style/images/TSA_BlackGreyHat.jpg';
    }
    if (target.dataset.prod === 'tsaHatBlackYellow') {
        zoomedImg.src = './style/images/c_TSA_hat_black_yellow.jpeg';
    }
    if (target.dataset.prod === 'tsaHatBlue') {
        zoomedImg.src = './style/images/c_TSA_hat_blue_white.jpeg';
    }
}

const enlargeImage = () => {
    popUpFrame.style.display = 'flex';
}

const minimizeImage = () => {
    popUpFrame.style.display = 'none';
}

imageArr.forEach(target => {
    target.addEventListener('click', (event) => {
        event.preventDefault();
        setImage(target);
        enlargeImage();
    })
})

exitButton.addEventListener('click', (event) => {
    event.preventDefault();
    minimizeImage();
})