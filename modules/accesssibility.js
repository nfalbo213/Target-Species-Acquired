/*
Copyright 2022 Nick Falbo (https://nick.falbo.dev) 
SPDX-License-Identifier: Apache-2.0
*/
// Variables
const ariaHiddenArr = document.querySelectorAll('.item-input');

// Exported Functions
function setAriaHidden (event, target) {
    event.preventDefault;
    if (target.ariaHidden === "true") {
        target.ariaHidden = "false";
        return;
    } 
    // Else is not firing as desired - likely becasuse target element is not being clicked
    else if (target.ariaHidden === "false") {
        target.ariaHidden = "true";
        return;
    }
};

export { ariaHiddenArr, setAriaHidden };