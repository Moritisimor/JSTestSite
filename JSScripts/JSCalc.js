const addButton             = document.getElementById("addButton");
const subtractButton        = document.getElementById("subtractButton");
const mulitplyButton        = document.getElementById("multiplyButton");
const divideButton          = document.getElementById("divideButton");
const pasteIntoField1Button = document.getElementById("pasteResultInField1Button");
const pasteIntoField2Button = document.getElementById("pasteResultInField2Button");
const ResultTxt             = document.getElementById("resultPar");
let result;

function calculate(operator) {
    let x = parseFloat(document.getElementById("xTxt").value);
    let y = parseFloat(document.getElementById("yTxt").value);
    if (operator === "add") { 
        result = x + y;
    } else if (operator === "subtract") {
        result = x - y;
    } else if (operator === "multiply") {
        result = x * y;
    } else if (operator === "divide") {
        result = x / y;
    }
    if (isNaN(result)) {
        alert("Only enter numbers please!");
        ResultTxt.textContent = "";
    } else if (result === Infinity || result === -Infinity) {
        alert("Do not divide by zero!")
        ResultTxt.textContent = "";
    } else {
        ResultTxt.textContent = result.toString();
    }
}

function pasteIntoField(htmlID) {
    if (result === undefined || isNaN(result) || !isFinite(result)) {
        alert("Calculate something first!")
    } else {
        document.getElementById(htmlID).value = result;
    }
}

pasteIntoField1Button.addEventListener("click", () => pasteIntoField("xTxt"));
pasteIntoField2Button.addEventListener("click", () => pasteIntoField("yTxt"));

addButton.addEventListener("click", () => calculate("add"));
subtractButton.addEventListener("click", () => calculate("subtract"));
mulitplyButton.addEventListener("click", () => calculate("multiply"));
divideButton.addEventListener("click", () => calculate("divide"));