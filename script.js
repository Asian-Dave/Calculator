let btnOperator = document.querySelectorAll(".calculator-grid button");
arrayNumbers = [];
arrayOperator = [];
storedLineArray = []


btnOperator.forEach((element, index) => {
    element.addEventListener("click", function() {
        if (isNaN(element.textContent) === false || element.textContent == ".") {
            storedLineArray.push(element.textContent);
            repeatPrinting(storedLineArray);
        } else if (element.textContent == "C") {
            document.getElementById("inputtext").innerHTML = "";
            storedLineArray = [];
        } else if (element.textContent == "DEL") {
            storedLineArray.pop();
            repeatPrinting(storedLineArray);
        } else if (element.textContent == "+" || element.textContent == "*" || element.textContent == "/" || element.textContent == "-") {
            storeNumber(storedLineArray);
            storedLineArray = [];
            arrayOperator.push(element.textContent);
        } else if (element.textContent == "=") {
            storeNumber(storedLineArray);
            storedLineArray = [];
            results();

        }
    })
});

function repeatPrinting(array) {
    document.getElementById("inputtext").innerHTML = "";
    storedLineArray.forEach(number => {
        document.getElementById("inputtext").innerHTML += number;
    });
}

function storeNumber(array) {
    let numberTemp = 0;
    array.forEach(element => {
        numberTemp += element.toString();
    });
    arrayNumbers.push(Number(numberTemp));
    document.getElementById("inputtext").innerHTML = "";
}

function results() {
    let result = arrayNumbers[0];
    arrayOperator.forEach((element, index) => {
        if (element === "+") {
            result = result + arrayNumbers[index + 1];
        } else if (element === "*") {
            result = result * arrayNumbers[index + 1];
        } else if (element === "/") {
            result = result / arrayNumbers[index + 1];
        } else if (element === "-") {
            result = result - arrayNumbers[index + 1];
        }
        document.getElementById("inputtext").innerHTML = result;

    });
    arrayNumbers = [];
    arrayOperator = [];
}