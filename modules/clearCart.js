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

import { findCartAmount } from "./addToCart.js";

const clearButton = document.querySelectorAll('.clear-button');


function clearCart(event) {

    event.preventDefault();
    //localStorage.clear();
   
    if (localStorage.getItem("bluegill")) {
        localStorage.removeItem("bluegill");
    }
    if (localStorage.getItem("bluegillSquare")) {
        localStorage.removeItem("bluegillSquare");
    }
    if (localStorage.getItem("fireCraw")) {
        localStorage.removeItem("fireCraw");
    }
    if (localStorage.getItem("goldenShad")) {
        localStorage.removeItem("goldenShad");
    }
    if (localStorage.getItem("pickleback")) {
        localStorage.removeItem("pickleback");
    }
    if (localStorage.getItem("rainbowTroutSwim")) {
        localStorage.removeItem("rainbowTroutSwim");
    }
    
    // Set number in Cart icon
    findCartAmount();
}

clearButton.forEach(target => {
    target.addEventListener('click', (event) => {
        clearCart(event);
        alert('Cart Updated!');
    });
});