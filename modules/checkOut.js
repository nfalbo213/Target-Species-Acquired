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

// **TODO** Create bellow on clientside of TSA website; then, intergrate the two
const itemArr = [
    /*{ id: 1,
    quantity: 2 }, 
    { id: 6,
    quantity: 1 },
    { id: 2,
    quantity: 1 }*/
];

let orderObj = {items: itemArr};
// End of TODO

/*const getShipping = () => {
    let num = 0;
    itemArr.forEach(target => {
        num += target.quantity;
    });
    console.log(num);
}*/

const getItemIdNum = (parsedObj) => {

    if (parsedObj.item === "bluegill") {
        return 1;
    }
    if (parsedObj.item === "bluegillSquare") {
        return 2;
    }
    if (parsedObj.item === "fireCraw") {
        return 3;
    }
    if (parsedObj.item === "goldenShad") {
        return 4;
    }
    if (parsedObj.item === "pickleback") {
        return 5;
    }
    if (parsedObj.item === "rainbowTroutSwim") {
        return 6;
    }

}

const sortLocalObjects = (targ) => {

    let localObj = localStorage.getItem(`${targ.dataset.prod}`);
    const parsedObj = JSON.parse(localObj);
    let num = Number(parsedObj.qty);
    let itemId = getItemIdNum(parsedObj);
    let obj;
    obj = {id: itemId, quantity: num}
    itemArr.push(obj);

}

const checkLocalStorage = () => {
    itemDisplayArr.forEach(target => {
        if (localStorage.getItem(`${target.dataset.prod}`)) {
            sortLocalObjects(target);
        }
    })
}

checkOutButton.forEach(target => {
    target.addEventListener('click', (event) => {
        event.preventDefault();
        checkLocalStorage();
        console.log(orderObj); // orderObj will be pushed into order
        //itemArr.splice(0); // not necessary because itemArr auto-erased when page is reloaded
        clearCart();
    })
})

export { itemArr, orderObj, /*getShipping,*/ checkLocalStorage };