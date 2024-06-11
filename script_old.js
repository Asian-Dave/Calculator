let btnOperator = document.querySelectorAll(".calculator-grid button");
arrayNumbers = [];
arrayOperator = [];
storedLineArray = []
btnOperator.forEach((element, index) => {

    element.addEventListener("click", function() {
        console.log(arrayNumbers);
        if (isNaN(element.textContent) === false || element.textContent == ".") {
            storedLineArray.push(element.textContent);
            document.getElementById("inputtext").innerHTML = "";
            repeatPrinting(storedLineArray);
        } else if (element.textContent == "C") {
            document.getElementById("inputtext").innerHTML = "";
            storedLineArray = [];
            arrayNumbers = [];
            arrayOperator = [];
        } else if (element.textContent == "DEL") {
            storedLineArray.pop();
            repeatPrinting(storedLineArray);
        } else if (element.textContent == "+" || element.textContent == "*" || element.textContent == "/" || element.textContent == "-") {
            if (arrayNumbers.length === 1) {
                console.log(arrayNumbers);
                storeNumber(storedLineArray);
                storedLineArray = [];
                results();
            } else {
                storeNumber(storedLineArray);
                storedLineArray = [];
                arrayOperator.push(element.textContent);
            }
        } else if (element.textContent == "=") {
            if (document.getElementById("inputtext").innerHTML === "") {

            } else {
                storeNumber(storedLineArray);
                storedLineArray = [];
                results();
            }

        }
    })
});

function repeatPrinting(array) {
    document.getElementById("inputtext").innerHTML = "";
    array.forEach(number => {
        document.getElementById("inputtext").innerHTML += number;
    });
}

function storeNumber(array) {
    let numberTemp = 0;
    array.forEach(element => {
        numberTemp += element.toString();
    });
    arrayNumbers.push(Number(numberTemp));

}

function results() {
    result = 0;
    console.log(arrayNumbers);
    result = arrayNumbers[0];
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
        arrayNumbers = [];
        console.log(arrayNumbers);
        arrayNumbers.push(result);
        document.getElementById("inputtext").innerHTML = arrayNumbers[0];
        arrayOperator = [];
    });

}