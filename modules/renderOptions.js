/*Copyright 2022 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0*/

const optionArr = document.querySelectorAll('.item-input');

const setBttnOptnValue = (targ) => {
    
    let localObj = localStorage.getItem( `${targ.dataset.prod}` );
    const parsedObj = JSON.parse(localObj);
    optionArr.forEach(target => {
        if (target.dataset.prod === targ.dataset.prod && parsedObj != null) {
            target.value = parsedObj.qty;
        }
    });
};

const renderOptions = (target) => {
    let i = 10;
    let num = 1
    do {
      const opt = document.createElement("option");
      opt.value = `${num}`;
      opt.text = `${num}`;
      target.add(opt, target.options[num]);
      num++
    } while (num <= i); 
};

const createOptions = () => {
    optionArr.forEach(target => {
        renderOptions(target);
        setBttnOptnValue(target);
    })
};

export { setBttnOptnValue, createOptions };