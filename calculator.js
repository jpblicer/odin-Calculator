const first = 3
const second = 5


function add(a, b){
    return a += b;
}

function subtract(a, b){
    return a -= b;
}

function multiply(a, b){
    return a *= b;
}

function divide(a, b){
    return a /= b;
}


console.log(add(first, second));
console.log(subtract(first, second));
console.log(multiply(first, second));
console.log(divide(first, second));
