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

////////////////
// Imports
import { hamburger, navLinkArr, navMobileArr, navLink, setSectionPadding, navHeightSet, burgerSpin } from "./mobileNavBar.js";
import { buttonArr, targetGrow, targetShrink } from "./targetHover.js";
import { checkInventory } from "../backend/stockCheck.js";
import { findLocalItems } from "./calculateCart.js"
import { itmbttnArr, buttonMessage, itemToCart, specialOrderMessage } from "./addToCart.js";
import { chckOrdrSumHght } from "./cartDisplay.js"
import { createOptions } from "./renderOptions.js"
import { setHomeSize } from "./homeDisplay.js";
import { cartUpdateMsg } from "./cartUpdateMsg.js";

// WINDOW EVENTS ///////////////////////////

window.addEventListener ('load', (event) => {
    event.preventDefault();
    navHeightSet();
    setSectionPadding(event);
    findLocalItems();
    //chckOrdrSumHght();
    createOptions();
});
window.addEventListener ('resize', (event) => {
    event.preventDefault();
    navHeightSet();
    setSectionPadding(event);
    //chckOrdrSumHght();
    const cartEmpty = document.getElementById('home-wrapper');
    if (cartEmpty.style.display === 'flex') {
        setHomeSize(false);
    };
});

// MOBILE NAVBAR /////////////////////////

// When mobile nav menu hamburger icon is clicked
hamburger.onclick = (event) => {  
    event.preventDefault();
    burgerSpin();
}
// When mobile nav menu item clicked
navMobileArr.forEach(target => {
    target.addEventListener('click', (event) => {
        event.preventDefault();
        navLink(target);
    })
})

// BUTTONS /////////////////////////
itmbttnArr.forEach(function(target) {
    target.addEventListener('click', (event) => {
        if (target.class === 'out-of-stock') {
            event.preventDefault();
            window.location.replace("#contact");
            specialOrderMessage(target);
        } else {
            itemToCart(event, target);
            buttonMessage(target);
            // ensure total updates when cart update buttons clicked
            findLocalItems();
            cartUpdateMsg();
            //alert('Cart Updated!');
        }
    });
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

//checkInventory();