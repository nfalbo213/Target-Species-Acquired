/*
Copyright 2022 Nick Falbo
SPDX-License-Identifier: Apache-2.0
*/
////////////////////
// Local Variables
const homeWrapper = document.getElementById('home-wrapper');

// Local Functions
const checkHeight = () => {
    let height = window.innerHeight;
    return height;
}
const checkWidth = () => {
    let width = window.innerWidth;
    return width;
}

// Exported Functions
function setHomeSize() {
    homeWrapper.style.height = `${checkHeight()}px`;
    homeWrapper.style.width = `${checkWidth()}px`;
};

export { setHomeSize };