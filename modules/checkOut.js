/*
Copyright 2022 Nick Falbo (https://nick.falbo.dev)
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import { itemDisplayArr } from "./renderCart.js";
import { clearCart } from "./clearCart.js";

const checkOutButton = document.querySelectorAll('.check-out-button');
const itemInputArr = document.querySelectorAll('.item-input')

const getItemIdNum = (parsedObj) => {

    if (parsedObj.item === "flatNatBornGiller") {
        return 1;
    }
    if (parsedObj.item === "crankNatBornGiller") {
        return 2;
    }
    if (parsedObj.item === "fireCraw") {
        return 3;
    }
    if (parsedObj.item === "goldenShad") {
        return 4;
    }
    if (parsedObj.item === "picklebackMedium") {
        return 5;
    }
    if (parsedObj.item === "solarfall") {
        return 6;
    }
    if (parsedObj.item === "m450") {
        return 7;
    }
    if (parsedObj.item === "invertNatBornGiller") {
        return 8;
    }
    if (parsedObj.item === "tsaKoozie") {
        return 9;
    }
    if (parsedObj.item === "tsaHatBlack") {
        return 10;
    }
    if (parsedObj.item === "tsaHatBlackYellow") {
        return 11;
    }
    if (parsedObj.item === "tsaHatBlue") {
        return 12;
    }
    if (parsedObj.item === "picklebackFlat") {
        return 13;
    }

}

const sortLocalObjects = (targ) => {

    let localObj = localStorage.getItem(`${targ.dataset.prod}`);
    const parsedObj = JSON.parse(localObj);
    let num = Number(parsedObj.qty);
    let itemId = getItemIdNum(parsedObj);
    let obj;
    obj = {id: itemId, quantity: num};
    return obj;

}

const checkLocalStorage = () => {
    let arr = [];
    itemInputArr.forEach(target => {
        if (localStorage.getItem(`${target.dataset.prod}`)) {
            arr.push(sortLocalObjects(target));
        }
    })
    let obj = {items: arr};
    return obj;
}

checkOutButton.forEach(target => {
    target.addEventListener('click', (event) => {
        event.preventDefault();
        checkLocalStorage();
        clearCart();
    })
})

export { checkLocalStorage };