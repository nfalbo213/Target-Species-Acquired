/*
Copyright 2022 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0
*/

const itemsWrapper = document.getElementById('items-wrapper');
const orderSummaryWrapper = document.getElementById('order-summary-wrapper');

const chckOrdrSumHght = () => {
    let width = window.innerWidth;
    if (width > 850) {
        const fixedHeight = orderSummaryWrapper.getBoundingClientRect();
        let height = fixedHeight.height - 140;
        
        //itemsWrapper.style.height = `${height}px`;
        //itemsWrapper.style.overflowY = 'auto';

        //itemsWrapper.style.overflow = 'scroll';
        //itemsWrapper.style.scrollMarginInlineStart = '0';
        //itemsWrapper.style.overflowX = 'visible';
        //itemsWrapper.style.width = '100%';
        //itemsWrapper.style.paddingLeft = '70%';
        //itemsWrapper.style.margin = '0';
        //itemsWrapper.style.paddingTop = '150%'

        itemsWrapper.style.display = 'flex';
        itemsWrapper.style.flexDirection = 'column';
        itemsWrapper.style.justifyContent = 'space-around';
        itemsWrapper.style.alignItems = 'center';
        itemsWrapper.style.alignContent = 'center';
        /*itemsWrapper.style.alignContent = 'center';*/

    }
    else {
        itemsWrapper.style.height = '100%';
        //itemsWrapper.style.overflow = '';
        itemsWrapper.style.overflowY = '';
        //itemsWrapper.style.overflowX = '';
        itemsWrapper.style.width = '';
        itemsWrapper.style.paddingLeft = '';
        //itemsWrapper.style.margin = '';
        itemsWrapper.style.display = 'flex';
        itemsWrapper.style.flexDirection = 'column';
        itemsWrapper.style.justifyContent = 'space-around';
        itemsWrapper.style.alignItems = 'center';
        itemsWrapper.style.alignContent = 'center';
    }
};

export { chckOrdrSumHght }