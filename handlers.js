import { convert } from './utils.js';

const inputOne = document.getElementById('input-1');
const inputTwo = document.getElementById('input-2');
const multiOutput = document.getElementById('multi-output');
const multiPicker = document.getElementById('picker');
const multiBtn = document.getElementById('multi-btn');
const moreDecimalButton = document.getElementById('decimal-button');


export const functionChooser = (e) => {
    let value = e.target.value;
    multiBtn.textContent = value;
};

let decimalPlaces = 2;
let prevValue;


export const multiMath = (e, dec) => {
    if (multiPicker.value !== 'null' && inputOne.value && inputTwo.value){   

        let nextVal = convert[multiPicker.value](Number(inputOne.value), Number(inputTwo.value));

        if (prevValue !== nextVal || prevValue === nextVal && !dec){
            decimalPlaces = 2;
        }

        prevValue = nextVal;

        let decimal = nextVal % 1 === 0 ? 0 : !dec ? 2 : dec;
        let displayDecimalButton = decimal === 0 ? 'none' : 'block';

        multiOutput.textContent = nextVal.toFixed(decimal);
        moreDecimalButton.style.display = displayDecimalButton;
    }
};

export const addMoreDecimals = (e) => {
    decimalPlaces++;
    multiMath(e, decimalPlaces);
};
