const calcDisplay = document.querySelector("#calc-display");
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


equalsBtn.addEventListener("click", () => {
    if(currentNum.length < 1 || operator.length < 1 || previousNum.length < 1){
        currentNum = [];
        operator = [];
        previousNum = [];
        calcDisplay.textContent = ""
    }else{
    currentNum.push(operate(Number(previousNum.join(``)), Number(currentNum.join(``)), operator))
    currentNum.shift();
    calcDisplay.textContent=currentNum;
    operator = [];
    previousNum = [];
    }
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


clearBtn.addEventListener("click",() => {
    currentNum = [];
    operator = [];
    previousNum = [];
    calcDisplay.textContent = ""
})



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
        calcDisplay.textContent = "error";
        currentNum =[];
        operator =[];
        previousNum=[];
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
