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


// 1 //
// let number;

// do {
//     number = prompt("Insira um número");
// }   while (number != 1 && number != 0);
    

// 2 //
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



// 3 //
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

// 3 diferntes opções de incremento do valor de uma varíavel
// cont++
// cont = cont + 1
// cont += 1

// 1 //
// for (let contador = 0; contador < 101; contador = contador +1) {
//     console.log(contador)    
// }


// 2 //
//let peso = 0;
//let pesoTotal = 0;

//for (let contador = 1; contador < 11; contador += 1) {
    //peso = prompt("insira o peso da pessoa numero" + contador );
    //pesoTotal = pesoTotal + Number(peso); //converter para número

//}  

//let media = pesoTotal / 10; //
//console.log()

//const quadrado = function (x) {
//  return x * x;
//};

//const aviso = function (m) {
//  m = ' AVISO > ' + m;
//  console.log(m);
//}

//aviso('hora do intervalo!'); //argumento
//aviso('')

//invocação da função quadrado passando o argumento 12
//console.log(quadrado(12));
//console.log(quadrado(19));
//console.log(quadrado(100));
//console.log(quadrado(4));

//let resultado = quadrado(12);
// console.log(resultado);



//const exibir = function(m) {
//    console.log(m);
//}
//exibir('hello wolrd');
//exibir('ola mundo');

//const tipo = function(valor) {
//  console.log(typeof valor);
//}
//tipo('isso é um string');
//tipo(1);
//tipo(true);

/*const menorValor = function(a,b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(menoreValor(4,4));
console.log(menorValor(10,8));
console.log(menorValor(100,90));*/

function soma(a,b) {
  return a + b;
}

function subtração(a,b) {
  return a - b;
}

function divisão(a,b) {
  return b !== 0 ? a / b : "erro de divisão por zero";
}

function multiplicação(a,b) {
  return a * b;
}

console.log(soma(5, 3)); //8
console.log(subtraçaõ(10, 4)); //9
console.log(divisão(20, 5)); //4
console.log(multiplicação(6, 7)); //42