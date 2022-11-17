/*
Copyright 2022 Nick Falbo
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
import { hamburger, navZero, navOne, navTwo, navThree, navObject, navLinkArr, setSectionPadding, navHeightSet, burgerSpin } from "./mobileNavBar.js";
import { setHomeSize } from "./homeDisplay.js";
import { buttonArr, targetGrow, targetShrink } from "./targetHover.js";
// **READ** MIGHT NOT NEED accessibility.js - DELETE FILE BEFORE PUBLISHING IF NOT
//import { ariaHiddenArr, setAriaHidden } from "../accesssibility.js";

// WINDOW EVENTS ///////////////////////////

window.addEventListener ('load', (event) => {
    event.preventDefault();
    navHeightSet();
    //setSectionPadding();
    setHomeSize();
});
window.addEventListener ('resize', (event) => {
    event.preventDefault();
    navHeightSet();
    //setSectionPadding();
    setHomeSize();
});

// MOBILE NAVBAR /////////////////////////

// When mobile nav menu hamburger icon is clicked
hamburger.onmousedown = (event) => {  
    event.preventDefault();
    burgerSpin();
}
// When mobile nav menu item clicked
navZero.onpointerup = (event) => {
    event.preventDefault();
    navObject.navButtonClicked = true;
    burgerSpin();
    window.location.replace("#home");
}
navOne.onpointerup = (event) => {
    event.preventDefault();
    navObject.navButtonClicked = true;
    burgerSpin();
    window.location.replace("#shop");
}
navTwo.onpointerup = (event) => {
    event.preventDefault();
    navObject.navButtonClicked = true;
    burgerSpin();
    window.location.replace("#about");
}
navThree.onpointerup = (event) => {
    event.preventDefault();
    navObject.navButtonClicked = true;
    burgerSpin();
    window.location.replace("#contact");
}

// BUTTONS /////////////////////////

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

// FOOTER ///////////////////////////////
document.getElementById("footer-year").innerHTML = new Date().getFullYear();



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
