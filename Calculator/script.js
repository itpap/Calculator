// Get references to HTML elements
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operatorInput = document.getElementById("operator");
const calculateButton = document.getElementById("calculate");
const resultParagraph = document.getElementById("result");

// Add click event listener to the calculate button
calculateButton.addEventListener("click", calculate);

// Define the calculate function
function calculate() {
    // Get values from input fields
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operator = operatorInput.value;

    // Perform the calculation based on the operator
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operator";
            break;
    }

    // Display the result
    resultParagraph.textContent = "Result: " + result;
}
