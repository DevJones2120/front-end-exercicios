/*

### Atividade guiada

Exibir no console as horas de uso para cada dia da semana de maneira formatada, adicionando um sinal verde, amarelo ou vermelho, de acordo com um critério seu de horas adequadas de uso da rede, por exemplo:

- 0-1 hora por dia = verde
- 1-3 horas por dia = amarelo
- 3 horas ou mais por dia = vermelho

*/

let usoDiasDaSemana = [2, 2.4, 5, 1.2, 0.5];
let diasDaSemana = [
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
];

// Determinar se o uso do dia é Verde, Amarelo ou Vermelho
const indicadorDeUso = (numeroDeHoras) => {
    if ( numeroDeHoras <= 1 ) {
        return "🟢"; 
    } else if ( numeroDeHoras <= 3 ) {
        return "🟡";
    } else {
        return "🔴"
    }
}

for (let contador = 0 ; contador < usoDiasDaSemana.length ; contador++) {

    let farol = indicadorDeUso(usoDiasDaSemana[contador]);
    let dia = diasDaSemana[contador];
    let horas = usoDiasDaSemana[contador];
    // let mensagem = "hora de uso"

    // if (horas > 1 ) {
    //     let mensagem = "horas de uso"
    // }

    let mensagem = (horas > 1) ? "horas de uso" : "hora de uso"; // Operador ternário

    console.log(`${farol} 📅 ${dia} | ${ horas.toFixed(2) } ${mensagem}`);

}

// console.log(typeof usoDiasDaSemana); //
// console.log(typeof usoDiasDaSemana[0]); //
// console.log(typeof indicadorDeUso); // Function
// usoDiasDaSemana[0];

