// Pedir para o usuário digitar dois números que representam os lados de um retângulo. Mostrar na tela a área total.

// Esse código deve ser executado quando a página é aberta e também quando clicar num botão. 

// O que acontece se o usuário inserir um dado inválido? 

let n2 = prompt("Digite um número");
n2 = parseFloat(n2);

escreve(n2);


function iniciarCalculo(simbolo) {
    let n1 = document.querySelector('#output').textContent;
    n1 = parseFloat(n1);

    let n2 = prompt('Digite outro número');
    n2 = parseFloat(n2);

    try {
        let msg = calcular(simbolo, n1, n2); 
    } catch(e) {
        alert(e);
        return;
    }

    

    escreve(msg);
}


function escreve(mensagem) {
    let output = document.querySelector('#output');
    output.innerHTML = mensagem;
}


function calcular(simbolo, n1, n2) {

    if( simbolo !== '+' && simbolo !== '-' && simbolo !== '*' && simbolo !== '/') {
        throw new Error('Digite um simbolo válido');
    }

    if( isNaN(n1) || isNaN(n2) ) {
        throw new Error('Chama passando somente números');
    }

    let numeroCalculado = null;

    switch(simbolo) {
        case '+':
            numeroCalculado = n1 + n2;
            break;
        case '-':
            numeroCalculado = n1 - n2;
            break;
        case '*':
            numeroCalculado = n1 * n2;
            break;
        case '/':
            numeroCalculado = n1 / n2;
    }

    return numeroCalculado;

}