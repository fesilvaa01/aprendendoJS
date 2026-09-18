
// const elementos = document.querySelectorAll(".texto");

//* Percorrendo a lista e imprimindo cada um dos elementos
// elementos.forEach(elemento => console.log(elemento));

//* Percorrendo a lista e pegando o texto do elemento
// elementos.forEach(elemento => console.log(elemento.innerText));

//* Alterando textos
// elementos.forEach(elemento => {
//     elemento.innerText = "Alterado";

//     //elemento.textContent = "Alterado"; //* vem com a formatação do elemento
// });

//* Trocando as tags - innerHTML
// elementos.forEach(elemento => {
//     elemento.innerHTML = "<h2>item</h2>";
// });

//* Trocando a cor do elemento
// elementos.forEach(elemento =>{
//     elemento.style.color = "#0000FF";
// });

//! EVENTOS COM JS
//* O que são eventos? Ações do usuário

//* Evento click
// const botao = document.getElementById("btn");

// botao.addEventListener("click", () => {
//     alert("Você clicou!");
// });

//* Evento de digitação (input/keyup)

// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");

//* INPUT
//* evento input -> dispara sempre que digita, em tempo real
// campo.addEventListener("input", () => {
    
//     //* value -> o que esta sendo digitado dentro do campo
//     resultado.innerText = campo.value;
// })

//* KEYUP
//* so dispara quando solta a tecla
//     campo.addEventListener("input", () => {
//     //* value -> o que esta sendo digitado dentro do campo
//     resultado.innerText = campo.value;
// })

//* Evento de mouse
// const elemento = document.getElementById("troca-cor");

// //* mouseover -> quando passar o mouse pelo elemento
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#ff0000";
// })

// //* mouseout -> quando o mouse sai do elemento
// elemento.addEventListener("mouseout", () => {
//     //elemento.style.backgroundColor = "#0000ff";
//     elemento.style.backgroundColor = "";
// })

//* mousemove
//* pega a posição do mouse
// document.addEventListener("mousemove", () => {
//     console.log('Posição X: ${evento.clienteX}, Posição Y: ${evento.clienteY}');
    
// })

//* Evento de Formulário (submit)

// const form = document.querySelectorAll("form"); //* pegando direto pela tag form

//* O comportamento padrão do formulario é recarregar a pagina ao enviar o submit
// form.addEventListener("submit", (e) => {

//     //* Impede o comportamento padrão do formulario
//     e.preventDefault();

//     const nome = document.getElementById("nome").value

//     console.log('Nome: ${nome}');

//     document.getElementById("nome").value = ""
// })

//* Criando elementos na página
// const novoElemento = document.createElement("p"); // cria o elemento <p>
// novoElemento.innerText = "Elemento novo criado"; //cria um texto no elemento

// const form = document.getElementById("form");

//* Estamos adicionando um elemento filho (p) dentro do pai (form)
// form.appendChild(novoElemento);

//* Criar um botao
// const botao = document.createElement("button");
// botao.innerText("Excluir elemento");

// form.appendChild(botao);

// botao.addEventListener("click", () => {
//     e.preventDefault();

//     novoElemento.remove();

   // apagando direto do pai
    //form.removeChild(novoElemento);
// })

//* Adicionando elementos em uma lista, a partir de um input
const input = document.getElementById("input") // input
const botao = document.getElementById("add") // botao
const lista = document.getElementById("lista") // ul

botao.addEventListener("click", () => {

    const valorDigitado = input.ariaValueMax; // pega o valor que foi digitado na caixinha/input

    const li = document.createElement("li"); // criando <li>
    li.innerText = valorDigitado;

    //* colocando o filho (li) dentro do pai (ul)
    lista.appendChild(li);

    input.value = "";
})