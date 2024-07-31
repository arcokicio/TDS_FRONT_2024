const tabuleiro = document.getElementsByClassName("campo");
const resultado = document.getElementById("resultado");
const resultado_x = document.getElementById("resultado_x"); 
const resultado_o = document.getElementById("resultado_o")

var ultimo_valor_clicado = "";
var block_game = false;
var vitoriaX = 0;
var vitoriaO = 0;

function marcar(posicao) {

    if ((tabuleiro[posicao].innerHTML == "") && (block_game == false)) {
        if (ultimo_valor_clicado == "O") {
            tabuleiro[posicao].innerHTML = "O"
            ultimo_valor_clicado = "X";
        } else {
            tabuleiro[posicao].innerHTML = "X"
            ultimo_valor_clicado = "O";
        }

        // VALIDADORES
        if (valida_tabuleiro("X") || valida_tabuleiro("O")) {
            if (ultimo_valor_clicado == "X") {
                resultado.innerHTML = "O ganhador Foi O";
                vitoriaO++;
                resultado_o.innerHTML = "O: " + vitoriaO;                
            } else {
                resultado.innerHTML = "O ganhador Foi X";
                vitoriaX++;
                resultado_x.innerHTML = "X: " + vitoriaX;
            }
            block_game = true;
        }else{
            console.log("EMPATE");
        }

    }
}

function valida_tabuleiro(valor) {
    if (tabuleiro[0].innerHTML == valor &&
        tabuleiro[1].innerHTML == valor &&
        tabuleiro[2].innerHTML == valor) {
        console.log("Fechou linha 1, e ganhador é: ", valor);
        return true;
    } else if (tabuleiro[3].innerHTML == valor &&
        tabuleiro[4].innerHTML == valor &&
        tabuleiro[5].innerHTML == valor) {
        console.log("Fechou linha 2, e ganhador é: ", valor);
        return true;
    } else if (tabuleiro[6].innerHTML == valor &&
        tabuleiro[7].innerHTML == valor &&
        tabuleiro[8].innerHTML == valor) {
        console.log("Fechou linha 3, e ganhador é: ", valor);
        return true;
    } else if (tabuleiro[0].innerHTML == valor &&
        tabuleiro[3].innerHTML == valor &&
        tabuleiro[6].innerHTML == valor) {
        console.log("Fechou coluna 1, e ganhador é: ", valor);
        return true;
    } else if (tabuleiro[1].innerHTML == valor &&
        tabuleiro[4].innerHTML == valor &&
        tabuleiro[7].innerHTML == valor) {
        console.log("Fechou coluna 2, e ganhador é: ", valor);
        return true;
    } else if (tabuleiro[2].innerHTML == valor &&
        tabuleiro[5].innerHTML == valor &&
        tabuleiro[8].innerHTML == valor) {
        console.log("Fechou coluna 3, e ganhador é: ", valor);
        return true;
    } else if (tabuleiro[0].innerHTML == valor &&
        tabuleiro[4].innerHTML == valor &&
        tabuleiro[8].innerHTML == valor) {
        console.log("Fechou diagonal 1, e ganhador é: ", valor);
        return true;
    } else if (tabuleiro[2].innerHTML == valor &&
        tabuleiro[4].innerHTML == valor &&
        tabuleiro[6].innerHTML == valor) {
        console.log("Fechou diagonal 2, e ganhador é: ", valor);
        return true;
    } else if (
        tabuleiro[0].innerHTML !== "" &&
        tabuleiro[1].innerHTML !== "" &&
        tabuleiro[2].innerHTML !== "" &&
        tabuleiro[3].innerHTML !== "" &&
        tabuleiro[4].innerHTML !== "" &&
        tabuleiro[5].innerHTML !== "" &&
        tabuleiro[6].innerHTML !== "" &&
        tabuleiro[7].innerHTML !== "" &&
        tabuleiro[8].innerHTML !== ""
    ) {
        console.log("EMPATE");
        return false;
    }
}

function reniciar_jogo() {
    ultimo_valor_clicado = "";
    block_game = false;
    resultado.innerHTML = "";

    for (let index = 0; index < tabuleiro.length; index++) {
        tabuleiro[index].innerHTML = "";
    }
}