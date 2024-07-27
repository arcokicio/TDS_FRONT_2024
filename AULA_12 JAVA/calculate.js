// Carrega Input da pagina
const input = window.document.getElementById("input"); 
const inputNum1 = window.document.getElementById("num1"); 
const inputNum2 = window.document.getElementById("num2");
const inputOperation = window.document.getElementById("operation"); 
const result = window.document.getElementById("result"); 
const h1 = window.document.createElement("h1"); // Cria um novo elemento HTML <h1>
result.appendChild(h1); // Adiciona o <h1> ao elemento com id "result"

// Funcao para exibir o resultado
function exibir(value){
    console.log(value); // Exibe o valor no console do navegador 
    h1.innerHTML = value; // Atualiza o conteudo do elemento <h1> com o valor fornecido
}

// Funcao para somar dois numeros
const somar = (a, b) => {
    const resultado = Number(a) + Number(b); // Converte de string para para numeros 
    exibir(resultado); // Exibe o resultado
}

// Funcao para subtrair dois numeros
const subtrair = (a, b) => {
    const resultado = Number(a) - Number(b); 
    exibir(resultado); 
}

// Funcao para multiplicar dois numeros
const multiplicar = (a, b) => {
    const resultado = Number(a) * Number(b); 
    exibir(resultado); 
    
}

// Funcao para dividir dois numeros
const dividir = (a, b) => {
    if (b == 0) {
        // O codigo para lidar com divisao por zero nao esta presente
    }
    const resultado = Number(a) / Number(b); 
    exibir(resultado); 
    
}

// Funcao principal para calcular com base na operacao selecionada
function calcula(){
    const valor_selecionado = inputOperation.value; // Obtem o valor selecionado da operacao

    // Usa uma estrutura switch para decidir qual operacao realizar
    switch (valor_selecionado) {
        case "+":
            somar(inputNum1.value, inputNum2.value); // Chama a funcao de soma
            break;
        case "-":
            subtrair(inputNum1.value, inputNum2.value); // Chama a funcao de subtracao
            break;
        case "*":
            multiplicar(inputNum1.value, inputNum2.value); // Chama a funcao de multiplicacao
            break;
        case "/":
            dividir(inputNum1.value, inputNum2.value); // Chama a funcao de divisao
            break;
        default:
            exibir("Operacao invalida"); // Exibe uma mensagem de erro se a operacao nao for reconhecida
    }
}
