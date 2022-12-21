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
import { hamburger, navLinkArr, navMobileArr, setSectionPadding, navHeightSet, burgerSpin, navLink } from "./mobileNavBar.js";
import { setHomeSize } from "./homeDisplay.js";
import { buttonArr, targetGrow, targetShrink } from "./targetHover.js";
import { form, handleSubmit } from "./contact.js";
import { itmbttnArr, buttonMessage, cartUpdateDisplay, itemToCart, specialOrderMessage, multiOrdBttnMessage } from "./addToCart.js";
import { createOptions } from "./renderOptions.js";
import { animateHome } from "./imageTransition.js";
// **READ** MIGHT NOT NEED accessibility.js - DELETE FILE BEFORE PUBLISHING IF NOT
//import { ariaHiddenArr, setAriaHidden } from "../accesssibility.js";

const multiOrdBttnArr = document.querySelectorAll('.ten-plus-order');

// WINDOW EVENTS ///////////////////////////

window.addEventListener ('load', (event) => {
    event.preventDefault();
    navHeightSet();
    createOptions();
    setSectionPadding(event);
    setHomeSize(true);
});
window.addEventListener ('resize', (event) => {
    event.preventDefault();
    navHeightSet();
    setSectionPadding(event);
    let width = window.innerWidth;
    if(width > 600) {
        setHomeSize(true);
    }
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
multiOrdBttnArr.forEach(target => {
    target.addEventListener('click', (event) => {
        event.preventDefault();
        multiOrdBttnMessage(target);
        window.location.replace("#contact");
    });
});
itmbttnArr.forEach(target => {
    target.addEventListener('click', (event) => {
        if (target.class === 'out-of-stock') {
            event.preventDefault();
            window.location.replace("#contact");
            specialOrderMessage(target);
        } else {
            itemToCart(event, target);
            buttonMessage(target);
            cartUpdateDisplay(target);
            alert('Cart Updated!');
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
// **READ** MIGHT NOT NEED accessibility.js - DELETE FILE BEFORE PUBLISHING IF NOT
/*
ariaHiddenArr.forEach(function(target) {
    target.addEventListener('click', (event) => {
        setAriaHidden(event, target);
    });
});
*/

// CONTACT FORM ///////////////////////////

form.addEventListener('submit', handleSubmit);

animateHome();

// Testing
/*emailButton.addEventListener('pointerover', (event) => {
    targetGrow(event, emailButton);
});
emailButton.addEventListener('pointerleave', (event) => {
    targetShrink(event, emailButton);
});*/

/*
navLinkArr.forEach(function(target) {
    target.addEventListener('click', (event) => {
        navObject.isScrolling = false;
        setSectionPadding(event);
    });
});
window.addEventListener('scroll', (event) => {
    navObject.isScrolling = true;
    setSectionPadding(event);
});
*/

//import { checkInventory } from "../backend/stockCheck.js";

//checkInventory();
//console.log(rawJson);
//console.log(rawJson);