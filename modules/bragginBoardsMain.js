/*
Copyright 2024 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0
*/
import { hamburger, navMobileArr, navHeightSet, burgerSpin, navLink } from "./mobileNavBar.js";
import { buttonArr, targetGrow, targetShrink } from "./targetHover.js";

window.addEventListener ('load', (event) => {
    event.preventDefault();
    navHeightSet();
});
window.addEventListener ('resize', (event) => {
    event.preventDefault();
    navHeightSet();
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