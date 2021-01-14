/*
let prod = {'nome': 'caneta', 'preco': 1.1};
console.log(prod);
console.log(prod.nome);
console.log(prod.preco);

let produtos = [prod, {'nome': 'lápis', 'preco': 2}];
console.log(produtos);
console.log(produtos[0].preco);
console.log(produtos[0].nome);
*/

// Mostrar na tela os dados de produtos, contendo quantidade em estoque e preço.

// Estes dados estarão agrupados em um array de objetos.

let msg = '';
let output = document.querySelector('#output');

let produtos = [
    {"nome": "caneta", "preco": 2,},
    {"nome": "lápis", "preco": 1.2},
    {"nome": "borracha", "preco": 0.5}
];

for(let i = 0; i < produtos.length; i++) {
    msg += '<h2>Produto: ' + produtos[i].nome +'<h2/>' 
    msg += '<p>Preço: R$ ' + produtos[i].preco +'<p/><br/>'
}

output.innerHTML = msg;