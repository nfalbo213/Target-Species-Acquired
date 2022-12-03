/*
Copyright 2022 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0
*/
import { warehouseObj, getWarehouse, postWarehouse } from "./updateWarehouse.js";
import { setHomeSize } from "./homeDisplay.js";
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
    //setSectionSize();
    setName();
    /*getWarehouse().catch(error => {
        console.log(error.message);
    });
    postWarehouse().catch(error => {
        console.log(error.message);
    });*/
})