const testOperator = "/";
const testFirstNum = 3
const testSecondNum = 5




function operate(firstNum, secondNum, operator){
    if(operator == "+"){
        return add(firstNum, secondNum)
    }else if(operator == "-"){
        return subtract(firstNum, secondNum)
    }else if(operator == "*"){
        return multiply(firstNum, secondNum)
    }else if(operator == "/"){
        return divide(firstNum, secondNum)
    }else{
        console.error("operate function operator variable logic error")
    }

}

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
