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

const itemArr = document.querySelectorAll('.inventory');
const optionArr = document.querySelectorAll('.item-input');

const url = "./backend/warehouse.json";
//let rawJson = {};

const renderOptions = (target, value) => {
  let i = value;
  let num = 1
  do {
    const opt = document.createElement("option");
    opt.value = `${num}`;
    opt.text = `${num}`;
    //opt.value = `${i}`;
    //opt.text = `${i}`;
    target.add(opt, target.options[0]);
    num++
    //i--
  } while (num <= i);
  //} while (i > 0)

  /*const qty = document.createElement("option");
  qty.value = `null`;
  qty.text = `Qty`;
  target.add(opt, target.options[0]);*/


}

const setOptions = (key, value) => {
  //console.log(`happened`);
  optionArr.forEach(function(target) {
    if (target.dataset.prod === key && value > 0) {
      renderOptions(target, value);
      console.log(`happened`);
    }
  });

};

const setInventory = (key, value) => {
// accepts a key it's value (from rawJson)

// loops through each item to match with key, and sets stock
  itemArr.forEach(function(target) {
    if (target.dataset.prod === key && value > 0) {
      target.innerHTML = `${value} in stock`;
      target.style.color = 'green';
    } else if (target.dataset.prod === key && value < 1) {
      target.innerHTML = `Out of stock`;
      target.style.color = 'red';
    }
});

}


const renderJsonResponse = (res) => {
    // Creates an empty object to store the JSON in key-value pairs
    let rawJson = {};
    for(let key in res){
      rawJson[key] = res[key];
      //console.log(key);
      if (key === "bluegill") {
        setInventory(key, rawJson.bluegill);
        setOptions(key, rawJson.bluegill);
      }
      if (key === "bluegillSquare") {
        setInventory(key, rawJson.bluegillSquare);
        setOptions(key, rawJson.bluegillSquare);
      }
      if (key === "fireCraw") {
        setInventory(key, rawJson.fireCraw);
        setOptions(key, rawJson.fireCraw);
      }
      if (key === "goldenShad") {
        setInventory(key, rawJson.goldenShad);
        setOptions(key, rawJson.goldenShad);
      }
      if (key === "pickleback") {
        setInventory(key, rawJson.pickleback);
        setOptions(key, rawJson.pickleback);
      }
      if (key === "rainbowTroutSwim") {
        setInventory(key, rawJson.rainbowTroutSwim);
        setOptions(key, rawJson.rainbowTroutSwim);
      }
    }
};

async function checkInventory () {
  try{
    const response = await fetch(url);
    if (response.ok) {
      const jsonResponse = await response.json();
      renderJsonResponse(jsonResponse);
    }
  } catch(error) {
    console.log(error.message);
  }
};

export { checkInventory };
