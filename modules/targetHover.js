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
// Variables
const buttonArr = document.querySelectorAll('.button-class');

// Exported Functions
function targetGrow (event, target) {
    event.preventDefault;
    if (target.id === "cart" || target.id === "instagram" || target.id === "facebook" || target.id === "play-pause-button") {
        target.style.opacity = "0.65";
        target.style.transform = "scale(1.15)";
    } else {
        //target.style.backgroundColor = "black";
        target.style.backgroundColor = "rgb(130, 130, 130)";
        target.style.transform = "scale(1.05)";
        target.style.color = "white";
    }
};

function targetShrink (event, target) {
    event.preventDefault;
    target.style.opacity = "";
    target.style.backgroundColor = "";
    target.style.transform = "";
    target.style.color = "";
}

export { buttonArr, targetGrow, targetShrink };