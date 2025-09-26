

let titulo = document.getElementById('div6');

let novaDiv = document.createElement('div');

novaDiv.innerHTML = '<p>meu nome não é igor</p>';

titulo.after(novaDiv);



//remove elementos da pagina
// titulo.remove();

novaDiv.addEventListener