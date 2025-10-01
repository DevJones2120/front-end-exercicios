
const textoInserido = document.querySelector(".texto")
const botaoValidar = document.querySelector(".botao")

botaoValidar.addEventListener('click', validar);

function validar () {
    
    if (textoInserido.value == "" ) {
        alert("Preencha o campo")
    } else {
        alert("Dados roubados com sucesso !")
    }
}



