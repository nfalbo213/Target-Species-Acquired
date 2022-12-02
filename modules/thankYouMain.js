/*
Copyright 2022 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0
*/
import { warehouseObj, getWarehouse, postWarehouse } from "./updateWarehouse.js";

window.addEventListener('load', (event) => {
    event.preventDefault();
    /*getWarehouse().catch(error => {
        console.log(error.message);
    });
    postWarehouse().catch(error => {
        console.log(error.message);
    });*/
    console.log(`event lisnter happened`)
})