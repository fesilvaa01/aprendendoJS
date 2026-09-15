
//let nome = "Diogo"
//let idade = "30"

//! CONCATENAÇÃO
// console.log("Nome: " + nome + ", idade" + idade);

//! INTERPOLAÇÃO
// console.log(`Nome: ${nome}, idade: ${idade}`);

// console.log(typeof nome);
// console.log(typeof idade);


//let soma = "S" + 3;
//let sub = "S" - 3;

//console.log(soma);
//console.log(sub);

//console.log(typeof soma);
//console.log(typeof sub);

//* CONVERTENDO VALORES
//let numero = "ab"; // string

//let convertido = Number(numero) // converte o valor para number

//console.log(typeof convertido);


//! OPERADORES RELACIONAIS

//* VALIDA IGUALDADE DE VALOR (SOMENTE VALOR)
//"10" == 10 -> true

//* VALIDA IGUALDADE DE VALOR E TIPO DE DADO
//"10" === 10 -> false

// &&
// ||
// !

//let opcao = 2
//switch(opcao)
//{
 //   case 1:
 //       hahshhahs
  //      break;
  //  case 2:
//}


//! ESTRUTURA DE REPETIÇÃO
//* let frutas = ["Maçã", "Banana", "Acerola", "Uva"];

//* console.log(frutas);

//* frutas.forEach(function(fruta) {
    
//*     console.log(`Fruta: $(fruta)`);
    
//* })

//* frutas.forEach(fruta => console.log(fruta));


//! FUNÇÕES NATIVAS DO JS
//* Percorre uma lista e cria uma nova lista com base em uma condição

//let numeros = [1, 2, 3, 4]

//let numerosDobrados = numeros.map(function(num) {
   // return num * 2
//})

//* numerosDobrados = [2, 4, 6, 8]
//console.log(numerosDobrados);

//* ou assim:
//* Arrow function com retorno implicito

//let numerosDobradosArrow = numeros.map(num => num * 2)

//! FILTER
//* Filtra os elementos com base em uma condição

//let numeros = [5, 10, 15, 20];

//let maioresQueDez = numeros.filter(num => num > 10);

// maioresQueDez = [15, 20]
//console.log(maioresQueDez);

//! REDUCE
//* Reduz os valores de um array para um único valor

//let numeros = [1, 2, 3, 4]

//* acumulador inicia em 0
//* variavel auxiliar
//* acumulador começa em 0 e soma com o auxiliar ate o ultimo valor do array

//let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);

//console.log(soma);

//! FIND
//* Retorna o primeiro elemento que atende a condição

//let produtos = [
   // { id: 1, nome: "Teclado", preco: 50 }, //* Produto
   // { id: 2, nome: "Mouse", preco: 30 },
   // { id: 2, nome: "Mouse", preco: 30 },

//]

//let item = produtos.find(produto => produto.id === 2);

//console.log(item);

//! DIFERENÇA ENTRE FILTER E FIND
//* Find -> retorna somente o primeiro elemento que ele encontra com a condição
//* Filter -> retorna todos os elementos que encontra com a condição
//let itemFiltrado = produtos.filter(produto => produto.id === 2);

//console.log(itemFiltrado);

//produtos.filter(function(produto){
//    produto.id === 2
//})

//! SPLIT
//* Divide a string em partes, transformando em um array

//let frase = "JS é top"

//let palavras = frase.split("");
//console.log(palavras);

//! TRIM
//* Trim remove espaços no inicio e final de string
//let nome = "    Paulo";
//let nomeLimpo = nome.trim();

//console.log(nome);
//console.log(nomeLimpo);

//! INCLUDES
//* Verifica se existe um valor dentro de uma lista e retorna um booleano
//* Verdadeiro ou Falso

//let frutas = ["maçã", "banana"];

//let frutasIncludes = frutas.includes("maçã");
//console.log(frutasIncludes); //* True

//* toLowerCase() -> transforma o texto em minusculo
//* toUpperCase() -> transforma o texto em maiusculo
//let nome = "FELIPE"
//let cargo = "estudante"

//console.log(nome.toLowerCase()); //* felipe
//console.log(cargo.toUpperCase()); //* ESTUDANTE

//! FOREACH
let nomes = ["Guilherme", "João", "Maria"]

console.log(nomes);

nomes.forEach(nome => console.log(nome));

//! SOME
//* Verifica se pelo menos um item atende

// let numeros = [1,3,5,8];

// let temPar = numeros.some(num => num % 2 == 0);
// console.log(temPar); //* True

//! EVERY
//* Verifica se TODOS os elementos atendem a condicao

// let todosPares = numeros.every(num => num % 2 === 0);
// console.log(todosPares); //* False

//! SORT
//* Ordena os elementos do array

let numeros = [3, 10, 5, 2, 4];
let letras = ["c", "a", "x", "h"]

//* Para letras
letras.sort();
console.log(letras);

//* Para numeros
numeros.sort((a, b) => a - b)
console.log(numeros);
