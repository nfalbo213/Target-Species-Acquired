import { clearCart } from "./clearCart.js";
import { itemArr, orderObj, /*getShipping,*/ checkLocalStorage } from "./checkOut.js";
import { baseUrl } from "../backend/stockCheck.js";

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
        
        fetch(`${baseUrl}/update-warehouse`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(orderObj),
            mode: "cors",
            credentials: "omit",
            cache: "default",
            redirect: "error",
            referrer: "",
            referrerPolicy: "no-referrer",
        }).then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.arrayBuffer();
        })

        return actions.order.capture()
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
        .then(function(details) {
            // READ this is where I can reset the form and also update the inventory
            /*fetch(`${baseUrl}/update-warehouse`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderObj),
            })*/
            clearCart();
            // Probably want to redirect to a landing 'thank you for your order'
            //window.location.href = "./cart.html";
            alert('Transaction completeed by ' + details.payer.name.given_name);    
        })
    },
    style: {
        layout: 'vertical',
        color:  'gold',
        shape:  'pill',
        label:  'paypal'
      }
}).render("#paypal");