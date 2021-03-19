import { functionChooser, multiMath, addMoreDecimals } from './handlers.js';

const multiPicker = document.getElementById('picker');
const multiBtn = document.getElementById('multi-btn');
const moreDecimalButton = document.getElementById('decimal-button');

multiPicker.addEventListener('input', functionChooser);
multiBtn.addEventListener('click', multiMath);
moreDecimalButton.addEventListener('click', addMoreDecimals);

moreDecimalButton.style.display = 'none';