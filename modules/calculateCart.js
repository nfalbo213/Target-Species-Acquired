/*
Copyright 2022 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0
*/
import { optionArr } from "./addToCart.js";

const totalAmount = document.getElementById('total-amount');

const caluculateTotal = (itemArr) => {
    let total = 0;
    itemArr.forEach(target => {
        if (target.item === "bluegill") {
            total += target.qty * 15
        }
        if (target.item === "bluegillSquare") {
            total += target.qty * 12
        }
        if (target.item === "fireCraw") {
            total += target.qty * 20
        }
        if (target.item === "goldenShad") {
            total += target.qty * 18
        }
        if (target.item === "pickleback") {
            total += target.qty * 12
        }
        if (target.item === "rainbowTroutSwim") {
            total += target.qty * 22
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

export { findLocalItems }