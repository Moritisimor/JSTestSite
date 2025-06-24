const addButton         = document.getElementById("AddButton");
const subtractButton    = document.getElementById("SubtractButton");
const mulitplyButton    = document.getElementById("MultiplyButton");
const divideButton      = document.getElementById("DivideButton");
const ResultTxt         = document.getElementById("ResultPar");

function calculate(operator) {
    let x = parseFloat(document.getElementById("xtxt").value);
    let y = parseFloat(document.getElementById("ytxt").value);
    let result;
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
        alert("only enter numbers please!");
        ResultTxt.textContent = "";
    } else if (result === Infinity || result === -Infinity) {
        alert("Do not divide by zero!")
        ResultTxt.textContent = "";
    } else {
        ResultTxt.textContent = result.toString();
    }
}

addButton.addEventListener("click", () => calculate("add"));
subtractButton.addEventListener("click", () => calculate("subtract"));
mulitplyButton.addEventListener("click", () => calculate("multiply"));
divideButton.addEventListener("click", () => calculate("divide"));