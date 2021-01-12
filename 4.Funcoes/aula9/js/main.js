// Pedir para o usuário digitar dois números que representam os lados de um retângulo. 

// Mostrar na tela a área total de duas formas distintas: Num alert ou na div#output (dependendo do botão clicado).

// Esse código não precisa ser executado quando a página é aberta.


let output = document.querySelector('#output');

/*
function mostrarAreaAlert() {
    let largura = parseFloat(prompt("Digite a largura"));
    let altura = parseFloat(prompt("Digite a altura"));

    let area = calcularArea(largura, altura);
    alert("A área total é: " + area);
}


function mostrarAreaOutput() {
    let largura = parseFloat(prompt("Digite a largura"));
    let altura = parseFloat(prompt("Digite a altura"));

    let area = calcularArea(largura, altura);
    output.innerHTML = "A área total é: " + area;
}


function calcularArea(l, a) {
    return l * a;
}
*/

function mostrarAreaAlert() {
    let largura = parseFloat(prompt("Digite a largura"));
    let altura = parseFloat(prompt("Digite a altura"));
    let resultado = calcular(largura, altura);

    let output = document.querySelector('#output').innerHTML = resultado;
}


function mostrarAreaOutput() {
    let largura = parseFloat(prompt("Digite a largura"));
    let altura = parseFloat(prompt("Digite a altura"));
    let resultado = calcular(largura, altura);

    alert(resultado);
}


function calcular(l, a) {
    return l * a;
}