/* Copyright 2022 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0 */

const homeWrapper = document.getElementById("home-wrapper");
let imgNum = 0;

const resetImgNum = (num) => {
    if (num === 4) {
        imgNum = 0;
    } else {
        return;
    }
};

const imageTransition = () => {
    const imgArr = [
        "./style/images/new_firecraw.jpg",
        "./style/images/c_invertED_NatBornGiller.jpeg",
        "./style/images/c_Ian_M450.jpeg",
        "./style/images/bluegill.jpg"
    ];
    if (imgNum === 0 || imgNum === 4) {
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
};

const animateHome = () => {
    const timer = setInterval(() => {
        /*if (isPaused) {
            
        }*/
        imageTransition();
    }, 5500);
};

animateHome();