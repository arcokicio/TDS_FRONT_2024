const tabuleiro = document.getElementsByClassName("campo");

var ultimo_valor_clicado

function validador (posicao){
    if (ultimo_valor_clicado == "X"){
        tabuleiro (posicao).innerHTML = "0"
        ultimo_valor_clicado = "X";

}

}
tabuleiro[posicao].innerHTML = "x"