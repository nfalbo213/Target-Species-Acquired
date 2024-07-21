/* Copyright 2022 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0 */

const homeWrapper = document.getElementById("home-wrapper");
const playPauseBttn = document.getElementById("play-pause-button");
const playPauseImg = document.getElementById("play-pause-img");
const playBttnMobile = document.getElementById("play-button-svg");
const pauseBttnMobile = document.getElementById("pause-button-svg");
let imgNum = 0;
let isPaused = false;

const resetImgNum = (num) => {
    if (num === 6) {
        imgNum = 0;
    } else {
        return;
    }
};

const imageTransition = () => {
    homeWrapper.style.transition = '2s ease-in-out';
    const imgArr = [
        "./style/images/new_firecraw.jpg",
        "./style/images/c_Kevin_Slideshow.jpg",
        "./style/images/c_invertED_NatBornGiller.jpeg",
        "./style/images/c_Ian_M450.jpeg",
        "./style/images/bluegill.jpg",
        "./style/images/c_Ethan_Slideshow.jpg"
    ];
    if (imgNum === 0 || imgNum === 6) {
        resetImgNum(imgNum);
        homeWrapper.style.backgroundImage = `url("${imgArr[imgNum]}")`;
        imgNum++;
    }
    else if (imgNum === 1) {
        homeWrapper.style.backgroundImage = `url("${imgArr[imgNum]}")`;
        imgNum++;
    }
    else if (imgNum === 2) {
        homeWrapper.style.backgroundImage = `url("${imgArr[imgNum]}")`;
        imgNum++;
    }
    else if (imgNum === 3) {
        homeWrapper.style.backgroundImage = `url("${imgArr[imgNum]}")`;
        imgNum++;
    }
    else if (imgNum === 4) {
        homeWrapper.style.backgroundImage = `url("${imgArr[imgNum]}")`;
        imgNum++;
    }
    else if (imgNum === 5) {
        homeWrapper.style.backgroundImage = `url("${imgArr[imgNum]}")`;
        imgNum++;
    }
};

const checkForMobile = (boolean) => {
    let width = window.innerWidth;
    if (width <= 600 && boolean) {
        playBttnMobile.style.display = 'block';
        pauseBttnMobile.style.display = 'none';
    }
    if (width <= 600 && !boolean) {
        playBttnMobile.style.display = 'none';
        pauseBttnMobile.style.display = 'block';
    }
    if (width > 600 && boolean) {
        playPauseImg.src = "./style/images/play-button.png";
    }
    if (width > 600 && !boolean) {
        playPauseImg.src = "./style/images/pause-button.png";
    }
    return;
};

const setPlayPauseBttn = () => {
    if (isPaused) {
        isPaused = false;
        checkForMobile(false);
    } else if (!isPaused) {
        isPaused = true;
        checkForMobile(true);
    }
}

const animateHome = () => {
    const timer = setInterval(() => {
        if (isPaused) {
            return;
        }
        else {
            imageTransition();
        }
    }, 5500);
};

export { playPauseBttn, setPlayPauseBttn, animateHome };