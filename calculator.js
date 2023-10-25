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
let calcDisplayValue = [];
let firstNum = [];
let secondNum = [];
let operator = [];


numberBtns.forEach((numberBtn)=> 
    numberBtn.addEventListener("click", updateCalcDisplay));

equalsBtn.addEventListener("click", ()=>{
    secondNum.push(...calcDisplayValue);
    emptyCalcDisplayValue();
    console.log(operate(Number(firstNum), Number(secondNum), operator))
});



operatorBtns.forEach((operatorBtn)=> 
    operatorBtn.addEventListener("click", (event)=>{
        firstNum.push(...calcDisplayValue);
        emptyCalcDisplayValue()
        updateCalcDisplay(event)
        operator.push(...calcDisplayValue);
        emptyCalcDisplayValue()
    })
    
);


function updateCalcDisplay(event){
    calcDisplayValueDigit = event.target.textContent;
    calcDisplayValue.push(calcDisplayValueDigit)
    calcDisplay.textContent = calcDisplayValue.join('')
};

function emptyCalcDisplayValue(){
    calcDisplayValue =[];
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
