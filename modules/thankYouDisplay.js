/*
Copyright 2022 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0
*/
////////////////////
// Local Variables
const homeWrapper = document.getElementById('home-wrapper');

// Local Functions
const checkFooterHeight = () => {
    const footer = document.getElementById('footer');
    let fixedHeight = footer.getBoundingClientRect();
    return fixedHeight.height;
}
const checkHeight = () => {
    let height = window.innerHeight;
    return height;
}
const checkWidth = () => {
    let width = window.innerWidth;
    return width;
}

// Exported Functions
function setSectionSize() {
    homeWrapper.style.height = `${checkHeight()-checkFooterHeight()}px`;
    homeWrapper.style.width = `${checkWidth()}px`;
};

export { setSectionSize };