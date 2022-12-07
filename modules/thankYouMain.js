/*
Copyright 2022 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0
*/
import { warehouseObj, getWarehouse, postWarehouse } from "./updateWarehouse.js";
import { setHomeSize } from "./homeDisplay.js";
import { buttonArr, targetGrow, targetShrink } from "./targetHover.js";
//import { setSectionSize } from "./thankYouDisplay.js";

const buyerName = document.getElementById("buyer-name");

const setName = () => {
    if (localStorage.getItem('payer-name')) {
        buyerName.style.display = '';
        buyerName.innerText = `${localStorage.getItem('payer-name')}`;
        localStorage.removeItem('payer-name');
    } else if (!localStorage.getItem('payer-name')) {
        buyerName.style.display = 'none';
    }
}


window.addEventListener('load', (event) => {
    event.preventDefault();
    setHomeSize(false);
    setName();
});
window.addEventListener('resize', (event) => {
    event.preventDefault();
    setHomeSize(false);
});

buttonArr.forEach(function(target) {
    target.addEventListener('pointerover', (event) => {
        targetGrow(event, target);
    });
});
buttonArr.forEach(function(target) {
    target.addEventListener('pointerleave', (event) => {
        targetShrink(event, target);
    });
});