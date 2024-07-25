// Carrega Input da pagina
const input = window.document.getElementById("input");
// Carrega ul da pagina
const ul = window.document.getElementById("ul");

var base_dados = window.localStorage.getItem("dados");

if (base_dados === null) {
    window.localStorage.setItem("dados", "[]");
    base_dados = "[]";
}

var alunos = [];

function carregar_dados() {
    alunos = JSON.parse(base_dados);

    alunos.forEach(item => {
        // Cria a li
        const li = window.document.createElement("li");
        // carrega o valor digitado no input  na li
        li.innerHTML = item;

        //Aplica a "li" dentro da "ul;"
        ul.appendChild(li);
    });
}

carregar_dados();

// função que adiciona novos itens a minha lista
function adicionar() {
    if (input.value !== "") {
        // Cria a li
        const li = window.document.createElement("li");
        // carrega o valor digitado no input  na li
        li.innerHTML = input.value;

        //Adiciona item na lista de alunos
        alunos.push(input.value)
        window.localStorage.setItem("dados", JSON.stringify(alunos));

        //Aplica a "li" dentro da "ul;"
        ul.appendChild(li);

        // limpa o input
        input.value = "";
    } else {
        alert("O campo está vazio!");
    }
}
