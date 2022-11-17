/*
Copyright 2022 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0
*/

// HTML Variables
const targetUrl = 'https://formspree.io/f/';
const form = document.getElementById("contact-form");
const key = form.dataset.uid;
const formStatus = document.getElementById("form-status");

// Async Functions
async function handleSubmit(event) {
    event.preventDefault();
    let target = targetUrl + key;
    const data = new FormData(form);
    try {
        const response = await fetch(target, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            formStatus.innerHTML = "🙋🏻‍♂️ Message recieved - we'll get back to you ASAP! 🎣";
            form.reset();
        } else {
            formStatus.innerHTML = "🤷🏻‍♂️ Oops! There was a problem submitting your message - give it another try... 🎣";
        }
    } catch (error) {
        formStatus.innerHTML = "🤷🏻‍♂️ Oops! There was a problem submitting your message - give it another try... 🎣";
        console.error(error);
    }
};

// Exports
export { form, handleSubmit };