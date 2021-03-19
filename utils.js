export const convert = { 
    add: function(n1, n2){return n1 + n2;}, 
    subtract: function(n1, n2){return n1 - n2;},
    multiply: function(n1, n2){return n1 * n2;}, 
    divide: function(n1, n2){return n1 / n2;}
};

export function convertFunction(func, n1, n2) {
    switch (func) {
        case 'add':
            return n1 + n2;
        case 'subtract':
            return n1 - n2;
        case 'multiply':
            return n1 * n2;
        case 'divide':
            return n1 / n2;
    }
}