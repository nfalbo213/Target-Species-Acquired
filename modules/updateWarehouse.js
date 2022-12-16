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

import { baseUrl } from "../backend/stockCheck.js";
import { checkLocalStorage } from "./checkOut.js";

let warehouseObj = {};

// getWarehouse (request warehouse jsonobj) --> updateWarehouse (compare jsonobj with orderobj) --> postWarehouse ( pass updatedobj to server)









// updateWarehouse (compare jsonobj with orderobj then define golbal newWarehouseObj)
const updateWarehouse = (jsonResponse) => {

        let warehouseObjecty;
        // Current warehouse levels
        let bluegillStock
        let bluegillSquareStock
        let fireCrawStock
        let goldenShadStock
        let picklebackMediumStock
        let solarfallStock
        const loop = (obj) => { 
          for (let i = obj.items.length - 1; i >= 0; i--) {
            console.log(obj.items[i].id)
            if (obj.items[i].id === 1) {
              bluegillQty = bluegillStock - obj.items[i].quantity
            }
            if (obj.items[i].id === 2) {
              bluegillSquareQty = bluegillSquareStock - obj.items[i].quantity
            }
            if (obj.items[i].id === 3) {
              fireCrawQty = fireCrawStock - obj.items[i].quantity
            }
            if (obj.items[i].id === 4) {
              goldenShadQty = goldenShadStock - obj.items[i].quantity
            }
            if (obj.items[i].id === 5) {
              picklebackMediumQty = picklebackMediumStock - obj.items[i].quantity
            }
            if (obj.items[i].id === 6) {
              solarfallQty = solarfallStock - obj.items[i].quantity
            }   
          }
        }
        const currentWarehouse = (jsonRes) => {
    
            for(let key in jsonRes){
              //jsonResponse[key]
              if (key === "flatNatBornGiller") {
                bluegillStock = jsonRes[key]
              }
              if (key === "crankNatBornGiller") {
                bluegillSquareStock = jsonRes[key]
              }
              if (key === "fireCraw") {
                fireCrawStock = jsonRes[key]
              }
              if (key === "goldenShad") {
                goldenShadStock = jsonRes[key]
              }
              if (key === "picklebackMedium") {
                picklebackMediumStock = jsonRes[key]
              }
              if (key === "solarfall") {
                solarfallStock = jsonRes[key]
              }
            }
    
        }
        // Prime Warehouse Levels (origional = qty)
        let bluegillQty
        let bluegillSquareQty
        let fireCrawQty
        let goldenShadQty
        let picklebackMediumQty
        let solarfallQty
        const adjustWarehouse = () => {
            bluegillQty = bluegillStock
            bluegillSquareQty = bluegillSquareStock
            fireCrawQty = fireCrawStock
            goldenShadQty = goldenShadStock
            picklebackMediumQty = picklebackMediumStock
            solarfallQty = solarfallStock
        }
        // Adjusted Warehouse Levels - assigned to warehouseObj
        //let warehouseObj
        const newWarehouse = () => {

          //console.log(orderObj)
          //console.log(JSON.stringify(orderObj));
          //console.log(JSON.parse(orderObj))
            /*orderObj.forEach(element => {
                if (element.id === 1) {
                    bluegillQty = bluegillStock - element.quantity
                }
                if (element.id === 2) {
                    bluegillSquareQty = bluegillSquareStock - element.quantity
                }
                if (element.id === 3) {
                    fireCrawQty = fireCrawStock - element.quantity
                }
                if (element.id === 4) {
                    goldenShadQty = goldenShadStock - element.quantity
                }
                if (element.id === 5) {
                    picklebackMediumQty = picklebackMediumStock - element.quantity
                }
                if (element.id === 6) {
                    solarfallQty = solarfallStock - element.quantity
                }  
            })*/
            loop(checkLocalStorage());
            warehouseObjecty = {bluegill: bluegillQty, bluegillSquare: bluegillSquareQty, fireCraw: fireCrawQty, goldenShad: goldenShadQty, picklebackMedium: picklebackMediumQty, solarfall: solarfallQty}
            //console.log(warehouseObj)
        }

        currentWarehouse(jsonResponse);
        adjustWarehouse();
        newWarehouse();
        postWarehouse(warehouseObjecty).catch(e => {
          console.log(e.message);
        });

}

// getWarehouse (request warehouse jsonobj)
const getWarehouse = async () => {
  
    const response = await fetch(`${baseUrl}/get-warehouse`);
    if (response.ok) {
      const jsonResponse = await response.json();
      //console.log(jsonResponse);
      updateWarehouse(jsonResponse);
      //console.log(response);
      }
};

// postWarehouse ( pass updatedobj to server)
const postWarehouse = async (warehouseObject) => {
      const response = await fetch(`${baseUrl}/post-warehouse`, {
          method: "POST",
          headers: {
              "Content-Type": 'application/json'
          },
          body: JSON.stringify(warehouseObject),
          mode: "cors",
          credentials: "omit",
          cache: "default",
          redirect: "error",
          referrer: "",
          referrerPolicy: "no-referrer",
      }) /*
      .then(response => response.json())
 
      // Displaying results to console
      .then(json => console.log(json));
      */
}


  export { warehouseObj, getWarehouse, postWarehouse }