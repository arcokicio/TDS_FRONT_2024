/*Explicação dos principais pontos:
Variáveis e Elementos:

tabuleiro: Obtém todas as células do tabuleiro.

resultado, resultado_x, resultado_o, empate, jogador_atual: Elementos que exibem informações do jogo, como o resultado e os contadores de vitórias e empates.
ultimo_valor_clicado: Armazena o último símbolo clicado para alternar entre 'X' e 'O'.
block_game: Indica se o jogo está bloqueado após uma vitória ou empate.
vitoriaX, vitoriaO, cont_empate: Contadores para vitórias e empates.
Função marcar:

Marca a célula clicada com o símbolo do jogador atual e atualiza o jogador.
Verifica se há um vencedor ou empate e atualiza os contadores e exibições conforme necessário.
Bloqueia o jogo após uma vitória ou empate.
Função valida_tabuleiro:

Verifica se um jogador ('X' ou 'O') ganhou checando todas as linhas, colunas e diagonais.
Função valida_empates:

Verifica se o tabuleiro está cheio e não há vencedores, indicando um empate.
Função reniciar_jogo:
*/

// Obtém todos os elementos do DOM com a classe 'campo', que representam as células do tabuleiro
const tabuleiro = document.getElementsByClassName("campo");

// Obtém elementos do DOM para exibir o resultado do jogo, contadores de vitórias, empates e o jogador atual
const resultado = document.getElementById("resultado");
const resultado_x = document.getElementById("resultado_x");
const resultado_o = document.getElementById("resultado_o");
const empate = document.getElementById("empate");
const jogador_atual = document.getElementById("jogador_atual");

// Variáveis de controle do estado do jogo
var ultimo_valor_clicado = ""; // Armazena o último símbolo clicado ('X' ou 'O')
var block_game = false; // Indica se o jogo está bloqueado após uma vitória ou empate
var vitoriaX = 0; // Contador de vitórias para 'X'
var vitoriaO = 0; // Contador de vitórias para 'O'
var cont_empate = 0; // Contador de empates

// Função vinda do Onclick HTML para marcar a célula selecionada e verificar o estado do jogo
function marcar(posicao) {

    // Verifica se a célula clicada está vazia e o jogo não está bloqueado
    if ((tabuleiro[posicao].innerHTML == "") && (block_game == false)) {
        // Alterna entre 'X' e 'O' e atualiza a célula selecionada
        if (ultimo_valor_clicado == "O") {
            tabuleiro[posicao].innerHTML = "O";
            ultimo_valor_clicado = "X";
            jogador_atual.innerHTML = "JOGADOR ATUAL: X"; // Atualiza o jogador atual
        } else {
            tabuleiro[posicao].innerHTML = "X";
            ultimo_valor_clicado = "O";
            jogador_atual.innerHTML = "JOGADOR ATUAL: O"; // Atualiza o jogador atual
        }

        // Verifica se há um vencedor
        if (valida_tabuleiro("X") || valida_tabuleiro("O")) {
            // Se 'X' não é o último valor clicado, 'O' venceu, e vice-versa
            if (ultimo_valor_clicado == "X") {
                resultado.innerHTML = "O ganhador Foi O";
                vitoriaO++; // Incrementa o contador de vitórias para 'O'
                resultado_o.innerHTML = "O: " + vitoriaO; // Atualiza a exibição de vitórias de 'O'
            } else {
                resultado.innerHTML = "O ganhador Foi X";
                vitoriaX++; // Incrementa o contador de vitórias para 'X'
                resultado_x.innerHTML = "X: " + vitoriaX; // Atualiza a exibição de vitórias de 'X'
            }
            block_game = true; // Bloqueia o jogo
        } else if (valida_empates()) {
            // Se todos os campos estiverem preenchidos e não houver vencedor
            cont_empate++; // Incrementa o contador de empates
            empate.innerHTML = "EMPATES: " + cont_empate; // Atualiza a exibição de empates
        }

    }
}

// Função para verificar se há um vencedor no tabuleiro
function valida_tabuleiro(valor) {
    // Verifica se o jogador 'valor' ganhou em alguma linha
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
    } 
    // Verifica se o jogador 'valor' ganhou em alguma coluna
    else if (tabuleiro[0].innerHTML == valor &&
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
    } 
    // Verifica se o jogador 'valor' ganhou em alguma diagonal
    else if (tabuleiro[0].innerHTML == valor &&
        tabuleiro[4].innerHTML == valor &&
        tabuleiro[8].innerHTML == valor) {
        console.log("Fechou diagonal 1, e ganhador é: ", valor);
        return true;
    } else if (tabuleiro[2].innerHTML == valor &&
        tabuleiro[4].innerHTML == valor &&
        tabuleiro[6].innerHTML == valor) {
        console.log("Fechou diagonal 2, e ganhador é: ", valor);
        return true;
    }
}

// Função para verificar se o tabuleiro está cheio e o jogo terminou em empate
function valida_empates() {
    // Verifica se todas as células do tabuleiro estão preenchidas
    if (
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
        return true; // Retorna verdadeiro se houver um empate
    } else {
        return false; // Retorna falso se ainda há espaço no tabuleiro
    }
}

// Função para reiniciar o jogo
function reniciar_jogo() {
    ultimo_valor_clicado = ""; // Reseta o valor do último clique
    block_game = false; // Desbloqueia o jogo
    resultado.innerHTML = ""; // Limpa a mensagem de resultado

    // Limpa o conteúdo de todas as células do tabuleiro
    for (let index = 0; index < tabuleiro.length; index++) {
        tabuleiro[index].innerHTML = "";
    }
}
