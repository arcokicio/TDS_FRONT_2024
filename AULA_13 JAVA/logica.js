const tabuleiro = document.getElementsByClassName("campo");

var ultimo_valor_clicado = "";

function validador(posicao) {

    if (tabuleiro[posicao].innerHTML == "") {
        if (ultimo_valor_clicado == "O") {
            tabuleiro[posicao].innerHTML = "O"
            ultimo_valor_clicado = "X";
        } else {
            tabuleiro[posicao].innerHTML = "X"
            ultimo_valor_clicado = "O";
        }

        // VALIDADORES
        valida_tabuleiro("X");
        valida_tabuleiro("O");
        
    }
}

function valida_tabuleiro(valor) {
    if (tabuleiro[0].innerHTML == valor &&
        tabuleiro[1].innerHTML == valor &&
        tabuleiro[2].innerHTML == valor) {
        console.log("Fechou linha 1");
        return true;
    } else if (tabuleiro[3].innerHTML == valor &&
        tabuleiro[4].innerHTML == valor &&
        tabuleiro[5].innerHTML == valor) {
        console.log("Fechou linha 2");
    } else if (tabuleiro[6].innerHTML == valor &&
        tabuleiro[7].innerHTML == valor &&
        tabuleiro[8].innerHTML == valor) {
        console.log("Fechou linha 3");
    } else if (tabuleiro[0].innerHTML == valor &&
        tabuleiro[3].innerHTML == valor &&
        tabuleiro[6].innerHTML == valor) {
        console.log("Fechou coluna 1");
    } else if (tabuleiro[1].innerHTML == valor &&
        tabuleiro[4].innerHTML == valor &&
        tabuleiro[7].innerHTML == valor) {
        console.log("Fechou coluna 2");
    } else if (tabuleiro[2].innerHTML == valor &&
        tabuleiro[5].innerHTML == valor &&
        tabuleiro[8].innerHTML == valor) {
        console.log("Fechou coluna 3");
    } else if(tabuleiro[0].innerHTML == valor &&
        tabuleiro[4].innerHTML == valor &&
        tabuleiro[8].innerHTML == valor) {
        console.log("Fechou diagonal 1");
    } else if (tabuleiro[2].innerHTML == valor &&
        tabuleiro[4].innerHTML == valor &&
        tabuleiro[6].innerHTML == valor) {
        console.log("Fechou diagonal 2");
    }

} 
