// Carrega Input da pagina
const input = window.document.getElementById("input");
const inputNum1 = window.document.getElementById("num1");
const inputNum2 = window.document.getElementById("num2");
const inputOperation = window.document.getElementById("operation");

const somar = (a, b) => {
    return a + b;
}

const subtrair = (a, b) => {
    return a - b;
}

const multiplicar = (a, b) => {
    return a * b;
}

const dividir = (a, b) => {
    if (b == 0) {
    }
    return a / b;
}


var resultado = 0;
function calcula(){

    const valor_selecionado = inputOperation.value;

    switch (valor_selecionado) {
        case "+":
            resultado = somar(num1.value, num2.value);
        case "-":
            resultado = subtrair(num1.value, num2.value);
        case "*":
            resultado = multiplicar(num1.value, num2.value);
        case "/":
            resultado = dividir(num1.value, num2.value);
    }
}


