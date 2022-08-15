
const NumButtons = document.querySelectorAll(".numKey");
const FunctButtons = document.querySelectorAll(".function");
const ScreenNums = document.getElementById("ScreenSection");

document.documentElement.className = localStorage.theme;

var currentNum = "";
var previousNum = 0;
var resultValue;
var numKey;
var code;
var operand;
var ans;

// Keyboard listener
document.addEventListener('keydown', (event) => {
    code = event.code;
    numKey = event.key;
        
        if (numKey === "1" || numKey === "2" || numKey === "3" || numKey === "4" || numKey === "5" || numKey === "6" || numKey === "7" || numKey === "8" || numKey === "9" || numKey === "0" || numKey === ".") {
            screenPrint();
        }
        if (code.includes("Divide") || code.includes("Multiply") || code.includes("Subtract") || code.includes("Add") || code.includes("Enter") || code.includes("Backspace") || code.includes("Enter") || code.includes("Escape") || numKey.includes("+") || numKey.includes("-") || numKey.includes("*") || numKey.includes("/")) {
            Operands();
        }
          
});


// Number Buttons listener
NumButtons.forEach(num => {
    num.addEventListener("click", () => {
        numKey = num.value;
        screenPrint();
    })
})

// Functions Buttons listener
FunctButtons.forEach(element => {
    element.addEventListener("click", () => {
        code = element.value;
        Operands()
        })
    })


// Get number and print it
function screenPrint() {
    if (numKey === "." && currentNum.includes(".")) return;
    currentNum += numKey;
    ScreenNums.innerText = currentNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


// Do operations
function Operands() {
    if (code === "RESET" || code.includes("Escape")) {
        ResetButton();
    }
    if (code === "DEL" || code === "Backspace") {
        DELButton();
    }
    if (code === "Equal" || code.includes("Enter")) {
        EqualButton();
    }
    if (code.includes("Add") || numKey.includes("+")) {
        AddButton();
    }
    if (code.includes("Subtract") || numKey.includes("-")) {
        SubtractButton();
    }
    if (code.includes("Multiply") || numKey.includes("*")) {
        MultiplyButton();
    }
    if (code.includes("Divide") || numKey.includes("/")) {
        DivideButton();
}
}

function nextNumber() {
    previousNum = Number(currentNum);
    numKey = "";
    currentNum = "";
}

function AddButton() {
    operand = "Add"
    if (currentNum === "") return;
    nextNumber()
}

function SubtractButton() {
    operand = "Subtract"
    if (currentNum === "") return;
    nextNumber()
}


function MultiplyButton() {
    operand = "Multiply"
    if (currentNum === "") return;
    nextNumber()
}


function DivideButton() {
    operand = "Divide"
    if (currentNum === "") return;
    nextNumber()
}


function EqualButton() {
    if (operand === "Add") {
        currentNum = previousNum + Number(currentNum)
    }
    if (operand === "Subtract") {
        currentNum = previousNum - Number(currentNum)
    }
    if (operand === "Multiply") {
        currentNum = previousNum * Number(currentNum)
    }
    if (operand === "Divide") {
        currentNum = previousNum / Number(currentNum)
    }

    ans = currentNum
    numKey = "";
    screenPrint()
}



function ResetButton() {
    currentNum = "";
    previousNum = "";
    resultNum = "";
    numKey = "";
    code = "";
    screenPrint();
}

function DELButton() {
    currentNum = currentNum.slice(0, -1);
    numKey = "";
    code = "";
    screenPrint();
}


    
