// Mostrar na tela todos os dados de um produto específico, contendo quantidade em estoque e preço. 
// Estes dados estarão agrupados em um objeto.

/*
let caneta = new Object();

caneta.nome = 'caneta';
caneta.preco = '2';

console.log(caneta);

let lapis = new Object();

lapis.nome = 'lapis preto';
lapis.preco = 1.2;

console.log(lapis);



let televisao = new Object();

televisao.nome = 'Televisão de LCD';
televisao.marca = 'Sony';
televisao.quantidade = 30;

let output = document.querySelector('#output');

output.innerHTML = televisao.nome;
*/

let produto1 = new Object();
produto1.nome = 'caneta';
produto1.preco = 2.2;
produto1.estoque = 10;

produto1.comprar = function(qtd) {
    if(!qtd) {
        qtd = 1;
    }
    console.log('comprou caneta');
    // this.estoque --;
    this.estoque = this.estoque - qtd
    console.log(this.estoque);
}

let msg = '';

msg += 'nome: ' + produto1.nome + '<br/>';
msg += 'preco: ' + produto1.preco + '<br/>';
msg += 'estoque: ' + produto1.estoque + '<br/>';

document.querySelector('#output').innerHTML = msg;