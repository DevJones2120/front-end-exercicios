
/*
1. Selecionando elementos por ID
    - Utilizando `document.getElementById()`, selecione a `<div>` que contém o livro "O Cortiço" e armazene sua referência em uma variável
    - Dê saída à variável anterior no console do navegador, observe o que é exibido
*/

const livro1 = document.getElementById("o-cortico")
console.log("Livro1 :", livro1);

/*
2. Selecionando elementos por Tag
    - Utilizando `document.getElementsByTagName()`, selecione todos os elementos `<a>` da página , armezene seu retorno em uma variável
    - Dê saída à variável anterior no console do navegador, observe o que é exibido
*/

let links = document.getElementsByTagName("a")
console.log("links: ", links);

/*
3. Selecionando elementos com Query
    - Utilizando `document.querySelector()`, selecione o elemento que possui o ID `vidas-secas`, armezene sua referência em uma variável
    - Dê saída à variável anterior no console do navegador, observe o que é exibido
    - Utilizando `document.querySelector()`, selecione o elemento que possui a classe `nav-list` e é filho do elemento com a classe `footer-links`, armezene sua referência em uma variável
    - Dê saída à variável anterior no console do navegador, observe o que é exibido
    - Utilizando `document.querySelector()`, selecione o elemento que possui a classe `nav-list` e é filho do elemento com a classe `header`, armezene sua referência em uma variável
    - Dê saída à variável anterior no console do navegador, observe o que é exibido
*/

let livro2 = document.querySelector("#vidas-secas")
console.log("livro2: ", livro2);


let navList = document.querySelector(".footer-liks .nav-list")
console.log("navList: ", navList);

let navListHeader = document.querySelector(".header .nav-list")
console.log("navList: ", navListHeader);

/*
## Modificando elementos

### Estilos

1. A partir da variável que armazena a referência ao livro "O Cortiço", acesse sua propriedade `style` e modifique a cor de seu texto atribuindo um novo valor à propriedade `color`, exemplo: `cortico.style.color = '#993300'`;
*/

livro1.style.color = "#993300";

/*
### Conteúdo

1. Utilizando `document.querySelector()`, selecione o elemento que contém o título de algum dos três livros. Utilizando a propriedade `innerText`, modifique o título do livro atribuindo um novo valor
*/
let paragrafo = livro1.querySelector("p");
paragrafo.style.color = "red";

//Modificando classe
livro2.className = "card-livro fora de estoque"
console.log("livro2.className: ", livro2.className);

//Modificar imagem do livro
let capaDoLivro = document.querySelector(".capa-livro");
capaDoLivro.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/d/d9/Don_Quixote_and_Sancho_Panza_by_Jules_David.png");


