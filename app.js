

const inputOne = document.getElementById('input-1');
const inputTwo = document.getElementById('input-2');
const multiOutput = document.getElementById('multi-output');
const multiPicker = document.getElementById('picker');
const multiBtn = document.getElementById('multi-btn');


const moreDecimalButton = document.getElementById('decimal-button');

const convert = { 
    ADD: function(n1, n2){return n1 + n2;}, 
    SUBTRACT: function(n1, n2){return n1 - n2;},
    MULTIPLY: function(n1, n2){return n1 * n2;}, 
    DIVIDE: function(n1, n2){return n1 / n2;}
};

const functionChooser = (e) => {
    let value = e.target.value;
    multiBtn.textContent = value;
};

moreDecimalButton.style.display = 'none';
let decimalPlaces = 2;
let value;

const multiMath = (e, dec) => {
    if (multiPicker.value !== 'null' && inputOne.value && inputTwo.value){   

        let nextVal = convert[multiPicker.value](Number(inputOne.value), Number(inputTwo.value));

        if (value !== nextVal || value === nextVal && !dec){
            decimalPlaces = 2;
        }

        value = nextVal;

        let decimal = nextVal % 1 === 0 ? 0 : !dec ? 2 : dec;
        let displayDecimalButton = decimal === 0 ? 'none' : 'block';

        multiOutput.textContent = nextVal.toFixed(decimal);
        moreDecimalButton.style.display = displayDecimalButton;
    }
};

const addMoreDecimals = (e) => {
    decimalPlaces++;
    multiMath(e, decimalPlaces);
};



multiPicker.addEventListener('input', functionChooser);
multiBtn.addEventListener('click', multiMath);
moreDecimalButton.addEventListener('click', addMoreDecimals);