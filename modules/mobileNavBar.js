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

////////////////////
// Local Variables
const navBar = document.getElementById('navbar');
const topSpan = document.getElementById('top-span');
const middleSpan = document.getElementById('middle-span');
const bottomSpan = document.getElementById('bottom-span');
const mobileNavList = document.getElementById('mobile-nav-list');
const sectionArr = document.querySelectorAll('.section-class');
////////////////////
// Global Variables
const hamburger = document.getElementById('hamburger');
const navZero = document.getElementById('nav0');
const navOne = document.getElementById('nav1');
const navTwo = document.getElementById('nav2');
const navThree = document.getElementById('nav3');
const navMobileArr = document.querySelectorAll('.nav-button');
let navObject = {hamburgerClicked: false, navButtonClicked: false, largeHeight: true, isScrolling: true};
const navLinkArr = document.querySelectorAll('.nav-link');

/////////////////////////
// Local Functions
const setSectionPadding = (event) => {
    event.preventDefault();
    let width = window.innerWidth;
    // Only use this section if decide to bring back scrolling portion (likely will not)
    /*
    if (navObject.isScrolling) {
        sectionArr.forEach(function(target) {
            target.style.paddingTop = "";
        });
    } else {
        if (width >= 600) {
            sectionArr.forEach(function(target) {
                target.style.paddingTop = "150px";
            });
        } else {
            sectionArr.forEach(function(target) {
                target.style.paddingTop = "100px";
            });
        }
    }
    */
    if (width > 600) {
        sectionArr.forEach(function(target) {
            target.style.paddingTop = "150px";
        });
    } else {
        sectionArr.forEach(function(target) {
            target.style.paddingTop = "100px";
        });
    }
}

const delayedAnimation = () => {
    if (navObject.hamburgerClicked) {
        // Drop down navbar extension
        mobileNavList.style.display = 'flex';
    } else {
        // Close navbar extension
        mobileNavList.style.display = '';
    }
}

const checkNavHeight = () => {
    if (!navObject.largeHeight) {
        return "100px";
    } else {
        return "150px";
    }
}

const checkIfNavButton = () => {
    if (!navObject.navButtonClicked) {
        $("#navbar").animate({
            height: `${checkNavHeight()}`,
            opacity: ".95"
        }, 200);
        setTimeout(delayedAnimation, 100);
    } else {
        $("#navbar").animate({
            height: `${checkNavHeight()}`,
            opacity: ".95"
        }, 100);
        setTimeout(delayedAnimation, 50);
        navObject.navButtonClicked = false;
    }
}

/////////////////////////
// Exported Functions
// Invoked in main.js
const navLink = (target) => {
    if (target.id === 'nav0') {
        navObject.navButtonClicked = true;
        burgerSpin();
        window.location.replace("./index.html#home");
    }
    if (target.id === 'nav1') {
        navObject.navButtonClicked = true;
        burgerSpin();
        window.location.replace("./index.html#shop");
    }
    if (target.id === 'nav2') {
        navObject.navButtonClicked = true;
        burgerSpin();
        window.location.replace("./index.html#about");
    }
    if (target.id === 'nav3') {
        navObject.navButtonClicked = true;
        burgerSpin();
        window.location.replace("./index.html#contact");
    } else {
        return;
    }
}
const navHeightSet = () => {
    let width = window.innerWidth;
    if (width >= 600) {
        navBar.style.height = "150px";
        mobileNavList.style.paddingTop = "150px";
        return navObject.largeHeight = true;
    } else {
        mobileNavList.style.paddingTop = "100px";
        navBar.style.height = "100px";
        return navObject.largeHeight = false;
    }
}
function burgerSpin() {
    if (!navObject.hamburgerClicked) {
        // Animate top of burger
        topSpan.style.transform = 'rotate(405deg)';
        topSpan.style.position = 'absolute';
        // Animate middle of burger
        middleSpan.style.transform = 'rotate(405deg)';
        middleSpan.style.position = 'absolute';
        // Animate bottom of burger
        bottomSpan.style.transform = 'rotate(315deg)';
        bottomSpan.style.position = 'absolute';
        // Adjust aria-expanded
        hamburger.ariaExpanded = 'true';
        $("#navbar").animate({
            height: "100%",
            opacity: ".98"
        }, 200);
        setTimeout(delayedAnimation, 50);
        // Set burger as clicked
        navObject.hamburgerClicked = true;
    } else {
        // Animate top of burger
        topSpan.style.transform = 'rotate(-360deg)';
        topSpan.style.position = '';
        // Animate middle of burger
        middleSpan.style.transform = 'rotate(-360deg)';
        middleSpan.style.position = '';
        // Animate bottom of burger
        bottomSpan.style.transform = 'rotate(-360deg)';
        bottomSpan.style.position = '';
        // Adjust aria-expanded
        hamburger.ariaExpanded = 'false';
        // Check to see if navbutton clicked, then animate navbar accordingly
        checkIfNavButton();
        // Set burger as 'not-clicked'
        navObject.hamburgerClicked = false;
    }
}

////////////////////////
// Exports
export { hamburger, navZero, navOne, navTwo, navThree, navObject, navLinkArr, navMobileArr, navLink, setSectionPadding, navHeightSet, burgerSpin };