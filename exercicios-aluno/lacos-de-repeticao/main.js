// WHILE

// prompt("Insira seu nome por favor")

// // 1
// let numero = 1;

// while ( numero <= 2025) {
//     console.log(numero);
//     numero = numero + 1;
// }


// 2
// let number = 90;

// while ( number >= 77 ) {
//     console.log(number);
//     number = number - 1;
// }


// 3

// let n =  prompt("Insira um número");
// let base = 1;

// while ( base <= n) {
//     console.log(base);
//     base = base + 1
// }



// DO WHILE
/*
EXEMPLO

let nome;

do {
  nome = prompt("Qual o seu nome?");
} while (!nome);
    console.log("Hello " + nome);
*/


// 1
// let number;

// do {
//     number = prompt("Insira um número");
// }   while (number != 1 && number != 0);
    

// 2
// let senha = "Gato";
// let senhaUsuario // Declaração
// do {
//     senha = prompt("Insira sua senha"); // Atribuição
// }   while (senha != "gato");


//
// do {
//     senhaUsuario = prompt("Insira sua senha")
// } while (!senha == senhaUsuario)
//



//3
// let numero;
// let numeroMaior = 0;
// let contador = 0;

// do {
//     numero = prompt("insira seu codigo");
//     numero = Number(numero); // Converter string para número
//     contador = contador + 1

//     if (numero > numeroMaior) {
//         numeroMaior = numero; 
//     }
// } while (contador < 5);

// console.log(numeroMaior)


// FOR
/*
for (let contador = 0; contador <= 12; contador = contador + 2) {
  console.log(contador);
}
*/

//1
// for (let contador = 0; contador < 101; contador = contador +1) {
//     console.log(contador)
// }


//2
let peso = 0;


for (let contador = 1; contador < 10; contador++) {
    peso += Number(prompt("insira seu peso"));
}   alert('Média de pesos é:' +  (peso / 10));