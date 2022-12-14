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

import { setCart } from "./addToCart.js";
import { itemDisplayArr } from "./renderCart.js";
import { totalDivArr, findLocalItems } from "./calculateCart.js";
import { cartUpdateMsg } from "./cartUpdateMsg.js";

const clearButton = document.querySelectorAll('.clear-button');
const clearItemArr = document.querySelectorAll('.remove-item-button');
const itemArr = document.querySelectorAll('.item-type-total');

const clearItem = (target) => {
    itemArr.forEach(targ => {
        if(`${target.dataset.prod}` === `${targ.dataset.prod}`) {
            localStorage.removeItem(`${targ.dataset.prod}`);
            targ.style.display = 'none';
        }
    totalDivArr.forEach(targ => {
        if (`${target.dataset.prod}` === `${targ.dataset.prod}`) {
            targ.style.display = 'none';
        }
    })
    })
    setCart();
}

function clearCart() {
    // Don't use localStroage.clear becasue it will clear everything in local storage (including items unrelated to TSA website)
    //localStorage.clear();
    itemArr.forEach(target => {
        if (localStorage.getItem(`${target.dataset.prod}`)) {
            localStorage.removeItem(`${target.dataset.prod}`);
            target.style.display = 'none';
        }
    })
    // Clear ALL subtotal items
    totalDivArr.forEach(targ => {
        targ.style.display = 'none';
    })
    // Set number in Cart icon
    setCart();
};

clearButton.forEach(target => {
    target.addEventListener('click', (event) => {
        event.preventDefault();
        clearCart();
        findLocalItems();
        //cartUpdateMsg();
        //alert('Cart Updated!');
    });
});

clearItemArr.forEach(target => {
    target.addEventListener('click', (event) => {
        event.preventDefault();
        clearItem(target);
        findLocalItems();
        //cartUpdateMsg();
        //alert('Cart Updated!');
    })
})

export { clearCart };