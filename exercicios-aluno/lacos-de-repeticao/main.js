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
    console.log("Hello " + yourName);
*/


// 1
// let number;

// do {
//     number = prompt("Insira um número");
// }   while (number != 1 && number != 0);
    

// 2
// let senha = "gato";

// do {
//     senha = prompt("Insira sua senha");
// }   while (senha != "gato");


//3
let numero;
let bigNumber = 0;
let contador = 0;

do {
    numero = prompt("insira seu codigo");
    numero = Number(numero);
    contador = contador + 1

    if (number > bigNumber) {
        bigNumber = numero; 
    }
} while (contador < 5);

console.log(bigNumber)


