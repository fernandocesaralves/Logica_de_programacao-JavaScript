// Pedir para o usuário digitar dois números que representam os lados de um retângulo assim que a página é carregada

// Mostrar na tela a área total quando clicar num botão 
/*
let output = document.querySelector("#output");
let resultado;

function areaRetangulo(base, altura) {
    base = prompt("Digite a area do retangulo");
    base = parseFloat(base);

    altura = prompt("Digite a altura do retangulo");
    altura = parseFloat(altura);

    resultado = (base * altura);
    
    output.innerHTML = resultado;
    
}

function limpar() {
    resultado = 0;

    output.innerHTML = resultado;
}
*/

let largura = prompt("Digite a largura");
largura = parseFloat(largura);

let altura = prompt("Digite a dgite a altura");
altura = parseFloat(altura);


function mostrarArea(l, a) {
    alert('Área total ' + (l * a));
}