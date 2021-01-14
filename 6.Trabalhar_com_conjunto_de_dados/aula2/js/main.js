// Mostrar na tela todos os produtos disponíveis para compra. 

// Os nomes dos produtos estão agrupados num array

/*
let produtos = new Array('caneta', 'lapis', 'tesoura', 'borracha', 'caderno', 'livro');

produtos.push('compasso', 'cartolina');

let output = document.querySelector('#output');

let msg = '';

for(let i = 0; i < produtos.length; i++) {
    msg += 'produto ' + (i + 1) + ': '+ produtos[i] + '<br/>';
}

output.innerHTML = msg;
*/

let produtos = new Array('Livro', 'Caneta', 'Lápis', 'Mochila', 'Bolsa');
let output = document.querySelector('#output'); 
let msg = '';

produtos.push('Bola', 'Calculadora', 'Borracha');



for(let i = 0; i < produtos.length; i++) {
    msg += 'Produto ' + (i+1) + ': ' + produtos[i] + '<br/>'; 
}

output.innerHTML = msg;