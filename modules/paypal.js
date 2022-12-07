import { clearCart } from "./clearCart.js";
import { checkLocalStorage } from "./checkOut.js";
//import { baseUrl } from "../backend/stockCheck.js";

//import { warehouseObj, getWarehouse, postWarehouse } from "./updateWarehouse.js";

//const baseUrl = 'http://localhost:3000';
const baseUrl = 'https://target-species-acquired.herokuapp.com';
const path = '/create-order';
const url = `${baseUrl}${path}`;

paypal.Buttons({
    createOrder: function() {
        return fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(checkLocalStorage()),
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
        //window.location.href = "./cart.html";
        window.close();
    },
    onShippingChange: function (data, actions) {
        if (data.shipping_address.country_code !== 'US') {
            return actions.reject();
          }
          return actions.resolve();
    },
    onApprove: function(data, actions) {

        return actions.order.capture()
        .then(function(details) {
            localStorage.setItem('payer-name', `${details.payer.name.given_name}`)
            clearCart()
            window.location.href = "./thank-you.html"
        })
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