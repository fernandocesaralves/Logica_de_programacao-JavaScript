// Pedir para o usuário digitar dois números que representam os lados de um retângulo. Mostrar na tela a área total. 

// Esse código deve ser executado quando a página é aberta e também quando clicar num botão.

// O que acontece se o usuário inserir um dado inválido? 
/*
let output = document.querySelector('#output');

calcularArea();

function calcularArea() {
    let num1 = parseFloat(prompt('Digite a largura'));
    let num2 = parseFloat(prompt('Digite a altura'));
    let resultado = num1 * num2;

    if(num1 !== 'number' || num2 !== 'number') {
        alert('Você precisa digitar um número');
    }

    output.innerHTML = resultado;

}
*/

function mostrarAreaAlert() {
    let largura = parseFloat(prompt('Digite a largura'));

    let altura = parseFloat(prompt('Digite a altura'));

    try {
        let area = calcularArea(largura, altura);
    } catch(e) {
        area = e;
    }

    alert('a área total é: ' + area);
}


function mostrarAreaOutput() {
    let largura = parseFloat(prompt('Digite a largura'));

    let altura = parseFloat(prompt('Digite a altura'));

    try {
        let area = calcularArea(largura, altura);
    } catch(e) {
        area = e;
    }


    document.querySelector('#output').innerHTML = 'a área total é de: ' + area;
}

mostrarAreaAlert();


function calcularArea(l, a) {
    if (l === undefined || a === undefined) {
        throw new Error('calcular Area precisa receber dois números');
    }

    if( isNaN(l) || isNaN(a) ) {
        throw new Error('Apenas números');
    }
    return l * a;
}