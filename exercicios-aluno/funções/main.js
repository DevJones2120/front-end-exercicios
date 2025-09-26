
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

/*
tipos de funções
*/

// function soma(a,b) {
//   return a + b;
// }

// Atribuição de função anônima
// const subtracao = function(numA, numB) {
//     return numA - numB;
// }

// // Arrow function
// const multiplicacao = (numA, numB) => {
//     numA * numB; // Return não é necessário pois é uma arrow function de uma linha
// }

// // Arrow function
// const divisao = (numA, numB) => {
//     return numA, numB
// }



// function subtração(a,b) {
//   return a - b;
// }

// function divisão(a,b) {
//   return b !== 0 ? a / b : "erro de divisão por zero";
// }

// function multiplicação(a,b) {
//   return a * b;
// }

// console.log(soma(5, 3)); //8
// console.log(subtraçaõ(10, 4)); //9
// console.log(divisão(20, 5)); //4
// console.log(multiplicação(6, 7)); //42

             
5 //
function calcularDesconto(valor, percentualDeDesconto) {

if ( typeof valor == "valor" && typeof percentualDeDesconto == "number" ) {
// percentualDeDesconto: 0-100

    let valorDoDesconto = (valor * percentualDeDesconto) / 100;
    let valorFinal = (valor - valorDoDesconto);
    return valorFinal;
    } else {
        console.log("não foi possivel calcular o desconto para ", valor)
        return valor;
    }
    
}
console.log(calcularDesconto(2000,20));
console.log(calculaDesconto("Azul",50));


6//
