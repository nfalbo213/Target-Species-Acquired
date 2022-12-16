/*
Copyright 2022 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0
*/
import { optionArr } from "./addToCart.js";
import { setHomeSize } from "./homeDisplay.js";

const totalAmount = document.getElementById('total-amount');
const totalDivArr = document.querySelectorAll('.item-type-total');
const qtyArr = document.querySelectorAll('.item-qty');
const costArr = document.querySelectorAll('.item-subtotal-cost')
const shippingTotal = document.getElementById('shipping-total');
const subTotal = document.getElementById('sub-total');
const taxTotal = document.getElementById('tax-total');

const cartPageDisplay = (boolean) => {
    const cartEmpty = document.getElementById('home-wrapper');
    const mainWrapper = document.getElementById('main-wrapper');
    if (boolean) {
        //cartEmpty.style.display = 'none';
        //orderSumWrapper.style.display = 'block';
        cartEmpty.style.display = 'none';
        mainWrapper.style.visibility = 'visible';
        mainWrapper.style.display = 'block';
    } else if (!boolean) {
        setHomeSize(false);
        cartEmpty.style.display = 'flex';
        cartEmpty.style.visibility = 'visible';
        mainWrapper.style.display = 'none';
    }
}

const displayOrderDetails = (target, num) => {
    totalDivArr.forEach(targ => {
        if (`${targ.dataset.prod}` === `${target.item}`) {
            targ.style.display = 'flex';
        }
    });
    qtyArr.forEach(targ => {
        if (`${targ.dataset.prod}` === `${target.item}`) {
            let numString = Number.parseFloat(num).toFixed(2)
            targ.innerText = `${targ.dataset.name} (${target.qty}) @ $${numString}/ea`;
        }
    });
    costArr.forEach(targ => {
        if (`${targ.id}` === `${target.item}-cost`) {
            let numString = Number.parseFloat(num*target.qty).toFixed(2)
            targ.innerText = `$${numString}`;
        }
    })
}

const calculateTaxes = (total) => {
    const taxNum = total * 0.06;
    const taxString = Number.parseFloat(taxNum).toFixed(2);
    taxTotal.innerText = `$${taxString}`;
    return taxNum;
}

const calculateShipping = (total) => {
    if (total >= 75) {
        shippingTotal.innerText = "$0.00";
        return 0;
    } else {
        shippingTotal.innerHTML = "$5.00";
        return 5;
    }
}

const calculateTotal = (itemArr) => {
    let total = 0;
    let num = 0;
    let cartArr = [];
    itemArr.forEach(target => {
        if (target.item === "flatNatBornGiller") {
            num = 20;
            total += target.qty * num;
            displayOrderDetails(target, num);
            cartArr.push(1)
        }
        if (target.item === "crankNatBornGiller") {
            num = 16;
            total += target.qty * num;
            displayOrderDetails(target, num);
            cartArr.push(1)
        }
        if (target.item === "fireCraw") {
            num = 18;
            total += target.qty * num;
            displayOrderDetails(target, num);
            cartArr.push(1)
        }
        if (target.item === "goldenShad") {
            num = 20;
            total += target.qty * num;
            displayOrderDetails(target, num);
            cartArr.push(1)
        }
        if (target.item === "picklebackMedium") {
            num = 16;
            total += target.qty * num;
            displayOrderDetails(target, num);
            cartArr.push(1)
        }
        if (target.item === "picklebackFlat") {
            num = 20;
            total += target.qty * num;
            displayOrderDetails(target, num);
            cartArr.push(1)
        }
        if (target.item === "solarfall") {
            num = 16;
            total += target.qty * num;
            displayOrderDetails(target, num);
            cartArr.push(1)
        }
        if (target.item === "m450") {
            num = 16;
            total += target.qty * num;
            displayOrderDetails(target, num);
            cartArr.push(1)
        }
        if (target.item === "invertNatBornGiller") {
            num = 16;
            total += target.qty * num;
            displayOrderDetails(target, num);
            cartArr.push(1)
        }
        if (target.item === "tsaKoozie") {
            num = 5;
            total += target.qty * num;
            displayOrderDetails(target, num);
            cartArr.push(1)
        }
        if (target.item === "tsaHatBlack") {
            num = 30;
            total += target.qty * num;
            displayOrderDetails(target, num);
            cartArr.push(1)
        }
        if (target.item === "tsaHatBlackYellow") {
            num = 30;
            total += target.qty * num;
            displayOrderDetails(target, num);
            cartArr.push(1)
        }
        if (target.item === "tsaHatBlue") {
            num = 30;
            total += target.qty * num;
            displayOrderDetails(target, num);
            cartArr.push(1)
        }
    });
    if (cartArr.length === 0) {
        cartPageDisplay(false);
    } else if (cartArr.length > 0) {
        cartPageDisplay(true);
        let subTotalString = Number.parseFloat(total).toFixed(2);
        subTotal.innerText = `$${subTotalString}`;
        let shippingNum = calculateShipping(total);
        total += calculateTaxes(total);
        total += shippingNum;
        let totalString = Number.parseFloat(total).toFixed(2);
        totalAmount.innerText = `$${totalString}`;
    };
};

const findLocalItems = () => {
    let itemArr = [];
    optionArr.forEach(target => {
        if (localStorage.getItem(`${target.dataset.prod}`)) {
            let obj = localStorage.getItem(`${target.dataset.prod}`);
            const itemObj = JSON.parse(obj);
            itemArr.push(itemObj);
        };
    })
    calculateTotal(itemArr);
}

export { totalDivArr, findLocalItems }