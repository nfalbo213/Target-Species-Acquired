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

const optionArr = document.querySelectorAll('.item-input');
const itmbttnArr = document.querySelectorAll('.add-item-button');

const cartText = document.getElementById("cart-text");

let cartArr = [];

const findCartAmount = () => {

    let total = 0;

    cartArr.forEach(target => {
        let num = Number(target.qty)
        //totalArr.push(num);
        total += num;
    });

    cartText.textContent = `${total}`;

    // Clear cartArr so only the localstorage is getting counted
    cartArr.splice(0);

}

const setCart = () => {
    optionArr.forEach(target => {
        if (localStorage.getItem(`${target.dataset.prod}`)) {
            let obj = localStorage.getItem(`${target.dataset.prod}`);
            const cartObj = JSON.parse(obj);
            cartArr.push(cartObj);
        };
    });
    // Set number in Cart icon
    findCartAmount();   
}


const setCartDisplayNum = (itemName, obj) => {

    
    const jsonStr = JSON.stringify(obj);
    localStorage.setItem(`${itemName}`, jsonStr);

    setCart();
};

function itemToCart(event, target) {
    event.preventDefault();

    const itemName = target.dataset.prod;
    
    let amount; 
    
    optionArr.forEach(function(targ) {
        if (targ.dataset.prod === itemName) {
            amount = targ.value;
        }
    })


    let obj = {
        item: itemName,
        qty: amount
    };

    setCartDisplayNum(itemName, obj);
};

function buttonMessage(target) {
    target.textContent = 'Update Cart';
}

itmbttnArr.forEach(function(target) {
    target.addEventListener('click', (event) => {
        if (target.class === 'out-of-stock') {
            event.preventDefault();
            window.location.replace("#contact");
        } else {
            itemToCart(event, target);
            buttonMessage(target);
            alert('Cart Updated!');
        }
    });
});

//setCartDisplayNum();
setCart();
//setButtons();

const setBttnOptnValue = (targ) => {
    
    let localObj = localStorage.getItem( `${targ.dataset.prod}` );
    const parsedObj = JSON.parse(localObj);
    
    optionArr.forEach(target => {
        if (target.dataset.prod === targ.dataset.prod && parsedObj != null) {
            target.value = parsedObj.qty;
        }
    });

    itmbttnArr.forEach(target => {
        if (target.dataset.prod === targ.dataset.prod && parsedObj != null) {
            target.textContent = 'Update Cart';
        }
    });
};

export { optionArr, setBttnOptnValue, findCartAmount };