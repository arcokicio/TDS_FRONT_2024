var alunos = [
    {
        nome: "Gabriele",
        idade: 25,
        email: "gabi@gabi.com"
    },
    {
        nome: "Thiago",
        idade: 19,
        email: "thiago@thiago.com"
    },
    {
        nome: "Pedro",
        idade: 29,
        email: "pedro@pedro.com"
    },
   ];

const body = window.document.getElementsByTagName("body")[0];

const ol = window.document.createElement("ol");


alunos.forEach((item)=>{
    const li = window.document.createElement("li");
    // li.innerHTML = "Nome: " + item.nome + " idade: " + item.idade + " email: " + item.email;
    li.innerHTML = `Nome:${item.nome} Idade:${item.idade} Email:${item.email}`
    ol.appendChild(li);
});

body.appendChild(ol);

console.log(alunos)

function AdicionaAluno(){
    const input = window.document.getElementById("cadastro");

    alunos.push(
        {
            nome: input.value,
            idade: 13,
            email: "lula@lulalivre.com"
        }
    );

    console.log(alunos);
}