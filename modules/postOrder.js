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

import { itemDisplayArr } from "./renderCart.js";

const postButton = document.querySelectorAll('.post-button');

const data = [];

let lat = 1.134234234
let lon = 2.123134132

let object = {lat, lon};

/*const parseData = (data) => {
    let obj = {};
    data.forEach( function(item){ 
        let key = Object.keys(item)[0]; //take the first key from every object in the array
        obj[ key ] = item [ key ];  //assign the key and value to output obj
        console.log(obj);
     });
}*/


const getLocalData = () => {
    itemDisplayArr.forEach(target => {
        if (localStorage.getItem(`${target.dataset.prod}`)) {
            let obj = localStorage.getItem(`${target.dataset.prod}`);
            data.push(obj);
        }
    })
    if (data.length > 0) {
        postOrder();
        //parseData(data);
        console.log(object);
        //console.log(object);
        //object = {};
        data.splice(0);
    } else if (data.length === 0) {
        console.log('didnt happen');
    }
};

async function postOrder() {
    //const data = { item, type}
    const options = {
        method: 'POST',
        //mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    };
    fetch('http://localhost:8888/post_order', options);
}; 

postButton.forEach(target => {
    target.addEventListener('click', (event) => {
        event.preventDefault();
        //postOrder();
        getLocalData();
    });
});