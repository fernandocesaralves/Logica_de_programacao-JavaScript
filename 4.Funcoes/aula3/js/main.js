// Pedir para o usuário digitar um número e mostrar a tabuada desse numero de 1 a 1000

// Deve ter a possibilidade do usuário digitar outro número e também de limpar a tabuada gerada previamente 

let output = document.querySelector('#output');
let mensagem = '';

/*
function mostrarTabuada() {
    // perguntar o número para o usuário
    let n = prompt("Digite um número");

    limparTabuada();

    // Converter para number
    n = parseFloat(n);

    // criar variavel indice
    let i = 1;
    
    // enquanto indice <= 1000
        // concatena na variavel mensagem
    while(i <= 1000) {
        mensagem += n + ' X ' + i + ' = ' + (n*i) + '<br/>';

        if(i % 10 === 0) {
           mensagem+= '<hr>'
        }

        i++;
    }

    // mostrar mensagem no output
    output.innerHTML = mensagem;
}

function limparTabuada() {
    mensagem = '';

    output.innerHTML = mensagem;
}
*/
function mostrarTabuada() {

    let num = parseInt(prompt("Digite um número"));

    limparTabuada();

    for(let i = 1; i <= 100; i++) {
        mensagem += num + ' X ' + i + ' = ' + (num*i) + '<br/>';

        if(i % 10 === 0) {
            mensagem += '<hr>';
        }

        output.innerHTML = mensagem;

    }

}

function limparTabuada() {
    mensagem = '';

    output.innerHTML = mensagem;
}