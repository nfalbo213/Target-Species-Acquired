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

const updateBttnTxt = (target) => {
    itmbttnArr.forEach(targ => {
        if (`${targ.dataset.prod}` === `${target.item}`) {
            //targ.textContent = 'Update Cart';
            buttonMessage(targ);
            cartUpdateDisplay(targ);
        };
    });
};

const findCartAmount = () => {

    let total = 0;

    cartArr.forEach(target => {
        let num = Number(target.qty)
        //totalArr.push(num);
        total += num;
        updateBttnTxt(target);
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
    /*if (target.dataset.bttntype === 'home') {
        target.textContent = 'Go to Cart';
        target.dataset.nav = 'viewCart';
    } else {
        target.textContent = 'Update Cart';
    }*/
    target.textContent = 'Update Cart';
};

const cartUpdateDisplay = (target) => {
    const cartUpdateArr = document.querySelectorAll('.cart-update');
    cartUpdateArr.forEach((targ) => {
        if (target.dataset.prod === targ.dataset.prod) {
            targ.style.display = 'block';
            targ.style.color = 'green';
            targ.textContent = 'Item added to cart'
        } else {
            return;
        };
    });
};
/*
itmbttnArr.forEach(function(target) {
    target.addEventListener('click', (event) => {
        if (target.class === 'out-of-stock') {
            event.preventDefault();
            window.location.replace("#contact");
        } else {
            itemToCart(event, target);
            buttonMessage(target);
            findLocalItems();
            alert('Cart Updated!');
        }
    });
});
*/

//setCartDisplayNum();
setCart();
//setButtons();

const multiOrdBttnMessage = (target) => {
    const contactText = document.getElementById('contact-text');
    contactText.placeholder = `Hi - I'm [🙋🏻‍♂️YOUR NAME HERE], and I'd like to order a batch of [🔟➕NUMBER HERE] ${target.dataset.name}s!`;
    contactText.textContent = `Hi - I'm [🙋🏻‍♂️YOUR NAME HERE], and I'd like to order a batch of [🔟➕NUMBER HERE] ${target.dataset.name}s!`;
}

const specialOrderMessage = (target) => {
    const contactText = document.getElementById('contact-text');
    contactText.placeholder = `Hi - I'm [🙋🏻‍♂️YOUR NAME HERE], and I'd like to special order a ${target.dataset.name}!`;
    contactText.textContent = `Hi - I'm [🙋🏻‍♂️ YOUR NAME HERE], and I'd like to special order a ${target.dataset.name}!`;
}

export { optionArr, itmbttnArr, findCartAmount, buttonMessage, cartUpdateDisplay, itemToCart, specialOrderMessage, multiOrdBttnMessage, setCart };