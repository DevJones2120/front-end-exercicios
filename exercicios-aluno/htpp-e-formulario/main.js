const botao = document.querySelector('#botao-dog');
const imagem = document.querySelector('#foto-dog');
const outroBotao = document.querySelector("#outroBotao")
const outraImagem = document.querySelector("#outraImagem")

function converterParaJSON(resposta) {
  return resposta.json();
}

function converterParaOutroJSON(repostas) {
    return repostas.json();
}

function atualizarImagem(dados) {
  imagem.src = dados.message;  // URL da foto está em 'message'
}

function atualizarOutraImagem(dados) {
    outraImagem.src = dados.message;
}

function mostrarErro(erro) {
  console.log('Erro ao buscar foto:', erro);
}

function buscarFotoDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(converterParaJSON)
    .then(atualizarImagem)
    .catch(mostrarErro);
}

function buscarOutraImagem() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(converterParaOutroJSON)
    .then(atualizarOutraImagem)
    .catch(mostrarErro);
}

botao.addEventListener('click', buscarFotoDog);
outroBotao.addEventListener("click", buscarOutraImagem)