let btnOperator = document.querySelectorAll(".calculator-grid button");
let arrayNumbers = [];
let arrayOperator = [];
let storedLineArray = [];

btnOperator.forEach((element, index) => {
    element.addEventListener("click", function() {
        console.log(arrayNumbers);
        if (!isNaN(element.textContent) || element.textContent === ".") {
            storedLineArray.push(element.textContent);
            document.getElementById("inputtext").innerHTML = "";
            repeatPrinting(storedLineArray);
        } else if (element.textContent === "C") {
            document.getElementById("inputtext").innerHTML = "";
            storedLineArray = [];
            arrayNumbers = [];
            arrayOperator = [];
        } else if (element.textContent === "DEL") {
            storedLineArray.pop();
            repeatPrinting(storedLineArray);
        } else if (["+", "*", "/", "-"].includes(element.textContent)) {
            storeNumber(storedLineArray);
            if (arrayNumbers.length === 1) {
                arrayOperator.push(element.textContent);
            } else {
                results();
                arrayOperator.push(element.textContent);
            }
            storedLineArray = [];
        } else if (element.textContent === "=") {
            if (storedLineArray.length > 0) {
                storeNumber(storedLineArray);
                storedLineArray = [];
                results();
            }
        }
    });
});

function repeatPrinting(array) {
    document.getElementById("inputtext").innerHTML = array.join("");
}

function storeNumber(array) {
    let numberTemp = array.join("");
    arrayNumbers.push(Number(numberTemp));
}

function results() {
    let result = arrayNumbers[0];
    arrayOperator.forEach((operator, index) => {
        if (operator === "+") {
            result += arrayNumbers[index + 1];
        } else if (operator === "-") {
            result -= arrayNumbers[index + 1];
        } else if (operator === "*") {
            result *= arrayNumbers[index + 1];
        } else if (operator === "/") {
            result /= arrayNumbers[index + 1];
        }
    });
    arrayNumbers = [result];
    arrayOperator = [];
    document.getElementById("inputtext").innerHTML = result;
}