/*
Copyright 2024 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0
*/

const cartText = document.getElementById('cart-text');

let optionArr = ["flatNatBornGiller", "crankNatBornGiller", "fireCraw", "goldenShad", "picklebackMedium", "picklebackFlat", "solarfall", "m450", "invertNatBornGiller", "tsaKoozie", "tsaHatBlack", "tsaHatBlackYellow", "tsaHatBlue"];

const calculateCartTotal = (itemArr) => {
    let total = 0;
    itemArr.forEach(target => {
        total -= target.qty;
    });
    cartText.innerHTML = `${total * -1}`;
};

const findLocalItems = () => {
    let itemArr = [];
    optionArr.forEach(target => {
        if (localStorage.getItem(`${target}`)) {
            let obj = localStorage.getItem(`${target}`);
            const itemObj = JSON.parse(obj);
            itemArr.push(itemObj);
        };
    });
    calculateCartTotal(itemArr);
};

export { findLocalItems }