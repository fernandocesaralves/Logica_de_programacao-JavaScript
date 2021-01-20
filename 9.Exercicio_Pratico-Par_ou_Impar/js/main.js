let nComputador = '';
let nJogador = '';
let minhaEscolha = '';

function sortear(max) {
    return Math.floor(Math.random() * max);
} 

function jogar() {
    nJogador = document.querySelector('#meuNumero').value;
    nJogador = parseInt(nJogador);
    nComputador = sortear(5);
    minhaEscolha = document.querySelector('input[type="radio"]:checked').value;
    console.log('Minha escolha', minhaEscolha);

    if(!nJogador) {
        alert('Primeiro digite um número');
        return;
    }


    let total = (nJogador + nComputador);

    let resultado = (total % 2 === 0) ? 'par' : 'impar';

    verificarResultado(resultado);
}

function verificarResultado(resultado) {
    if(minhaEscolha === resultado) {
        alert('Eu ganhei!');
    } else {
        alert('O computador ganhou!');
    }
    console.log('nJogador', nJogador);
    console.log('nComputador', nComputador);
}
