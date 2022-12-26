/*Copyright 2022 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0*/

const updateDiv = document.getElementById('cart-update-msg');

const setDisplayParam = () => {
    let height = (window.innerHeight / 2) - 75;
    let width = (window.innerWidth / 2) - 100;
    updateDiv.style.marginTop = `${height}px`;
    updateDiv.style.marginLeft = `${width}px`;
};

const cartUpdateMsg = () => {
    setDisplayParam();    
    updateDiv.style.display = 'grid';
    setTimeout(() => {
        updateDiv.style.display = 'none';
    }, 2000);
};

export { cartUpdateMsg };