function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum").innerHTML = "Please enter valid numbers.";
        document.getElementById("product").innerHTML = "Please enter valid numbers.";
        document.getElementById("difference").innerHTML = "Please enter valid numbers.";
        document.getElementById("quotient").innerHTML = "Please enter valid numbers.";
        document.getElementById("modulo").innerHTML = "Please enter valid numbers.";
        return;
    }

    const sum = num1 + num2;
    const product = num1 * num2;
    const difference = num1 - num2;
    const quotient = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    const modulo = num2 !== 0 ? num1 % num2 : "Error: Division by zero";

    document.getElementById("sum").innerHTML = "The sum is: " + sum.toFixed(2);
    document.getElementById("product").innerHTML = "The product is: " + product.toFixed(2);
    document.getElementById("difference").innerHTML = "The difference is: " + difference.toFixed(2);
    document.getElementById("quotient").innerHTML = "The quotient is: " + quotient.toFixed(2);
    document.getElementById("modulo").innerHTML = "The modulo is: " + modulo.toFixed(2);
}

function clearFields() {
    document.getElementById("sum").innerHTML = "";
    document.getElementById("product").innerHTML = "";
    document.getElementById("difference").innerHTML = "";
    document.getElementById("quotient").innerHTML = "";
    document.getElementById("modulo").innerHTML = "";
}
