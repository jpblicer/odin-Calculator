/*
readjust the variables and the logi
maybe
    display secondNum
    upon hitting operations secondNum is moved to firstNum variable 
    upon hitting equal the function is called and the result is put into firstNum and secondNum and operations are emptied
    clear will empty out firstNum and secondNum and operations
*/




const calcDisplay = document.querySelector("#calc-display");
const oneBtn = document.querySelector("#one-btn");
const twoBtn = document.querySelector("#two-btn");
const threeBtn = document.querySelector("#three-btn");
const fourBtn = document.querySelector("#four-btn");
const fiveBtn = document.querySelector("#five-btn");
const sixBtn = document.querySelector("#six-btn");
const sevenBtn = document.querySelector("#seven-btn");
const eightBtn = document.querySelector("#eight-btn");
const nineBtn = document.querySelector("#nine-btn");
const addBtn = document.querySelector("#add-btn");
const subtractBtn = document.querySelector("#subtract-btn");
const multiplyBtn = document.querySelector("#multiply-btn");
const divideBtn = document.querySelector("#divide-btn");
const equalsBtn = document.querySelector("#equals-btn");
const clearBtn = document.querySelector("#clear-btn");

const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");

let calcDisplayValueDigit;
let previousNum = [];
let currentNum = [];
let operator = [];


numberBtns.forEach((numberBtn)=> 
    numberBtn.addEventListener("click", updateCalcDisplay));

equalsBtn.addEventListener("click", ()=>{
    //c.push(...calcDisplayValue);
    //emptycurrentNum();
    console.log(operate(Number(previousNum), Number(currentNum), operator))
});



operatorBtns.forEach((operatorBtn)=> 
    operatorBtn.addEventListener("click", (event)=>{
        previousNum.push(...currentNum);
        emptycurrentNum();
        updateCalcDisplay(event)
        operator.push(...currentNum);
        emptycurrentNum()
    })
    
);


function updateCalcDisplay(event){
    calcDisplayValueDigit = event.target.textContent;
    currentNum.push(calcDisplayValueDigit)
    calcDisplay.textContent = currentNum.join('')
};

function emptycurrentNum(){
    currentNum = [];
}


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
};


function add(a, b){
    return a += b;
};

function subtract(a, b){
    return a -= b;
};

function multiply(a, b){
    return a *= b;
};

function divide(a, b){
    return a /= b;
};
