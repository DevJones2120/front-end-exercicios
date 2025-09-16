// alert("Bem vindo a página de aprovados do ENEM.")

// // Inserindo dados
// let dados = prompt("Insira seu nome")
//     console.log(dados)

//     if ( typeof dados != "string" ) {
//         alert(" Insira seu nome por favor !")
//     } 
 

// // 1 Verificação
// let number = prompt("Insira um número") 

//     if ( number > 10) {
//         console.log("Seja bem vindo " + dados + "!")
//     } else {
//         alert("Infelizmente você não poderá prosseguir," + dados + ".")
//     }

// // 2 Comparadores
// let numero = prompt("Insira seu número de inscrição")

//     if ( numero > 532 && numero < 743 ) {
//         console.log("Parabéns ! " + dados + ", você está entre os convocados.")
//     } else {
//         alert("Infelizmente você não está na lista. Bpoa sorte na próxima !")
//     }

// // 3 
// let senha = prompt("Insira sua senha")

//     if (senha == "Aluno") {
//         console.log("Certo, vamos prosseguir !")
//     } else {
//         alert("Tente novamente mais tarde!")
//     }


// 4 Consórcio
// let idade 
// let salario

// let = prompt("Insira sua idade")
//     if (idade >= 18) {
//         console.log("prossiga")
//     } else {
//         alert("Você não tem idade suficiente.")
//     }

// let = prompt("Quantos salários mínimos você recebe ?")
//     if (salario >= 2) {
//         console.log("você tem dois salários ou mais")
//     } else (
//         console.log("Sua renda não é suficiente.")
//     )

// 5 Concurso
let experiencia = prompt("Insira sua experiência como professor");
let pontuacao = 0;

    if ( experiencia <= 4 ) {
        pontuacao = pontuacao + 10; // Expressão
    }   else if ( experiencia >= 5 ) {
        pontuacao = pontuacao + 20;
    }

    let formacao = prompt("Insira a sua formação acadêmica");

    if ( formacao == "graduação" ) {
        //pontuacao == pontuacao + 10;
        pontuacao += 10;
    }   else if ( formacao == "especialização" ) {
        pontuacao += 20;
    } else if ( formacao == "mestrado") {
        pontuacao += 30;
    } else if ( formacao == "doutorado") {
        pontuacao += 40;
    }

    console.log("")




   // 7
   