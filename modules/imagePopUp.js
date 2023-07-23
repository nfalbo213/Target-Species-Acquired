/*Copyright 2023 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0*/
const imageArr = document.querySelectorAll('.item-img');
const popUpFrame = document.querySelector('.pop-up-frame');
const exitButton = document.querySelector('.pop-up-exit-button');
const zoomedImg = document.querySelector('.zoomed-img');

const setImage = (target) => {
    if (target.dataset.prod === 'flatNatBornGiller') {
        zoomedImg.src = './style/images/bluegill.jpg';
        zoomedImg.alt = 'Enlarged image of hand-painted Flatside plopper 90mm - Natural Born Giller';
    }
    if (target.dataset.prod === 'crankNatBornGiller') {
        zoomedImg.src = './style/images/bluegill-squarebill.jpg';
        zoomedImg.alt = 'Enlarged image of hand-painted S-Crank Alternative Squarebill - Natural Born Giller';
    }
    if (target.dataset.prod === 'invertNatBornGiller') {
        zoomedImg.src = './style/images/c_invertED_NatBornGiller.jpeg';
        zoomedImg.alt = 'Enlarged image of S-Crank Alternative Squarebill - Inverted Natural Born Giller';
    }
    if (target.dataset.prod === 'fireCraw') {
        zoomedImg.src = './style/images/new_firecraw.jpg';
        zoomedImg.alt = 'Enlarged image of S-Crank Alternative Squarebill - Fire Craw';
    }
    if (target.dataset.prod === 'goldenShad') {
        zoomedImg.src = './style/images/Golden-Shad.jpg';
        zoomedImg.alt = 'Enlarged image of hand-painted Flatside plopper 90mm - Gold Shad';
    }
    if (target.dataset.prod === 'picklebackMedium') {
        zoomedImg.src = './style/images/c_PickleFlat2.jpg';
        zoomedImg.alt = 'Enlarged image of hand-painted Medium Diving 1.5 - Pickleback';
    }
    if (target.dataset.prod === 'picklebackFlat') {
        zoomedImg.src = './style/images/c_PicklePlopper2_Medium.jpeg';
        zoomedImg.alt = 'Enlarged image of hand-painted Flatside plopper 90mm - Pickleback';
    }
    if (target.dataset.prod === 'solarfall') {
        zoomedImg.src = './style/images/c_Solarfall.jpg';
        zoomedImg.alt = 'Enlarged image of hand-painted Medium Diving 2.5 - Solarfall';
    }
    if (target.dataset.prod === 'm450') {
        zoomedImg.src = './style/images/c_Ian_M450.jpeg';
        zoomedImg.alt = 'Enlarged image of hand-painted M450 Lure';
    }
    if (target.dataset.prod === 'tsaKoozie') {
        zoomedImg.src = './style/images/c_TSA_Koozie.jpeg';
        zoomedImg.alt = 'Enlarged image of TSA Koozie';
    }
    if (target.dataset.prod === 'tsaHatBlack') {
        zoomedImg.src = './style/images/TSA_BlackGreyHat.jpg';
        zoomedImg.alt = 'Enlarged image of TSA Trucker Hat (Black on Grey color way)';
    }
    if (target.dataset.prod === 'tsaHatBlackYellow') {
        zoomedImg.src = './style/images/c_TSA_hat_black_yellow.jpeg';
        zoomedImg.alt = 'Enlarged image of TSA Trucker Hat (Black on Yellow color way)';
    }
    if (target.dataset.prod === 'tsaHatBlue') {
        zoomedImg.src = './style/images/c_TSA_hat_blue_white.jpeg';
        zoomedImg.alt = 'Enlarged image of TSA Trucker Hat (Blue, White, and Grey color way)';
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