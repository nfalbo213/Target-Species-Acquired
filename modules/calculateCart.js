/*
Copyright 2022 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0
*/
import { optionArr } from "./addToCart.js";

const totalAmount = document.getElementById('total-amount');
const totalDivArr = document.querySelectorAll('.item-type-total');
const qtyArr = document.querySelectorAll('.item-qty');
const costArr = document.querySelectorAll('.item-subtotal-cost')

const displayOrderDetails = (target, num) => {
    totalDivArr.forEach(targ => {
        if (`${targ.id}` === `${target.item}-total-div`) {
            targ.style.display = 'flex';
        }
    });
    qtyArr.forEach(targ => {
        if (`${targ.dataset.prod}` === `${target.item}`) {
            targ.innerText = `${targ.dataset.name} (${target.qty}) @ $${num}.00/ea`;
        }
    });
    costArr.forEach(targ => {
        if (`${targ.id}` === `${target.item}-cost`) {
            targ.innerText = `$${num*target.qty}.00`;
        }
    })
}

const caluculateTotal = (itemArr) => {
    let total = 0;
    let num = 0;
    itemArr.forEach(target => {
        if (target.item === "bluegill") {
            num = 15;
            total += target.qty * num;
            displayOrderDetails(target, num);
        }
        if (target.item === "bluegillSquare") {
            num = 12;
            total += target.qty * num;
            displayOrderDetails(target, num);
        }
        if (target.item === "fireCraw") {
            num = 20;
            total += target.qty * num;
            displayOrderDetails(target, num);
        }
        if (target.item === "goldenShad") {
            num = 18;
            total += target.qty * num;
            displayOrderDetails(target, num);
        }
        if (target.item === "pickleback") {
            num = 12;
            total += target.qty * num;
            displayOrderDetails(target, num);
        }
        if (target.item === "rainbowTroutSwim") {
            num = 22;
            total += target.qty * num;
            displayOrderDetails(target, num);
        }
    })
    totalAmount.innerText = `$${total}.00`;
}

const findLocalItems = () => {
    let itemArr = [];
    optionArr.forEach(target => {
        if (localStorage.getItem(`${target.dataset.prod}`)) {
            let obj = localStorage.getItem(`${target.dataset.prod}`);
            const itemObj = JSON.parse(obj);
            itemArr.push(itemObj);
        };
    })
    caluculateTotal(itemArr);
}

export { totalDivArr, findLocalItems }