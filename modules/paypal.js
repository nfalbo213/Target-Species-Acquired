import { clearCart } from "./clearCart.js";
import { itemArr, orderObj, /*getShipping,*/ checkLocalStorage } from "./checkOut.js";
import { baseUrl } from "../backend/stockCheck.js";

import { warehouseObj, getWarehouse, postWarehouse } from "./updateWarehouse.js";

//const baseUrl = 'http://localhost:4000';
//const baseUrl = 'https://target-species-acquired.herokuapp.com';
const path = '/create-order';
const url = `${baseUrl}${path}`;



paypal.Buttons({
    createOrder: function() {
        checkLocalStorage(); // ** THIS WORKS ** where to invoke checkLocalStorage ** IMPORTANT ** ----> AFTER ONAPPROVE is where clearCart and itemArr splice would be invoked (ensures cart is cleared AFTER order is made)   
        //getShipping();
        return fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderObj),
                mode: "cors",
                credentials: "omit",
                cache: "default",
                redirect: "error",
                referrer: "",
                referrerPolicy: "no-referrer",
            }).then(res => {
                if (res.ok) return res.json()
                return res.json().then(json => Promise.reject(json))
            }).then(({ id }) => {
                return id;
            }).catch(error => {
                console.log(error);
            })
    },
    onCancel: function(data) {
        window.location.href = "./cart.html";
        itemArr = [];
    },
    onApprove: function(data, actions) {
        
        //console.log(`onApprove: ${JSON.stringify(warehouseObj)}`)
        getWarehouse().catch(error => {
            console.log(error.message);
        });
        /*postWarehouse().catch(error => {
            console.log(error.message);
        });*/
        //getWarehouse()
        //postWarehouse()
        //getWarehouse()
        //postWarehouse()
        return actions.order.capture()
        /*.then(
            getWarehouse()
        )
        .then(
            postWarehouse()
        )*/
        /*.then(
        
            
            /*async () => {
            try {
                fetch(`${baseUrl}/update-warehouse`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(orderObj),
                })
            } catch (e) {
                console.log(e.message)
            }
        }*
        )*/
        //.then(clearCart)
        .then(function(details) {
            // READ this is where I can reset the form and also update the inventory
            /*fetch(`${baseUrl}/update-warehouse`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderObj),
            })*/
            //warehouseObj = {};

            //clearCart();
            // Probably want to redirect to a landing 'thank you for your order'
            //window.location.href = "./cart.html";

            //console.log(details.payer.name.given_name)
            localStorage.setItem('payer-name', `${details.payer.name.given_name}`)
            //localStorage.setItem('payer-name', `Test Name`)
            clearCart()
            window.location.href = "./thank-you.html"
            //const buyerName = document.getElementById('buyer-name')
            //buyerName.textContent = `${details.payer.name.given_name}`
            //alert('Transaction completeed by ' + details.payer.name.given_name);    
            //console.log(details.payer.name.given_name)
            //console.log(data)

            /* ***** NEW IDEA ***** send to 'thanks for your order" page that says "Thanks for your order ${details.payer.name.given_name}!" and has an eventlistner on page load that invokes getWarehouse & postWarhouse; Might need to store orderObj data in global variable
            
            also.....
            
            consider blowing up updateWarehouse.js and starting fresh (it will need to be refactored at some point anyways)
            
            */



        })/*.then(function(details) {
            const buyerName = document.getElementById('buyer-name')
            buyerName.textContent = `${details.payer.name.given_name}`
        })*/
        //.then(clearCart)
        //.then(getWarehouse)
        //.then(postWarehouse)
        .catch(error => {
            console.log(error.message)
        })
    },
    style: {
        layout: 'vertical',
        color:  'gold',
        shape:  'pill',
        label:  'paypal'
      }
}).render("#paypal");