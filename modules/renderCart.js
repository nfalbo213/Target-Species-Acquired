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

const itemDisplayArr = document.querySelectorAll('.product-item');

const renderItems = (string) => {
    itemDisplayArr.forEach(target => {
        if (target.dataset.prod === string) {
            target.style.display = 'flex';
        }
    });
};

const checkLocalStorage = () => {
    itemDisplayArr.forEach(target => {
        if (localStorage.getItem(`${target.dataset.prod}`)) {
            renderItems(`${target.dataset.prod}`);
        };
    });
};

checkLocalStorage();

export { itemDisplayArr };