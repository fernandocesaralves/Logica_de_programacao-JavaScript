/*
let n1 = parseFloat(prompt("Digite um número"));

function escreve() {
    let output = document.querySelector("#output");
    output.innerHTML = n1;
}
escreve();

function somar() {
    let n2 = parseFloat(prompt("Digite o número"));

    //n1 = (n1 + n2);
    n1 += n2;
    escreve();
}

function subtrair() {
    let n2 = parseFloat(prompt("Digite o número"));

    //n1 = (n1 - n2);
    n1 -= n2;
    escreve();
}

function multiplicar() {
    let n2 = parseFloat(prompt("Digite o número"));

    //n1 = (n1 * n2);
    n1 *= n2;
    escreve();
}

function dividir() {
    let n2 = parseFloat(prompt("Digite o número"));

    //n1 = (n1 / n2);
    n /= n2;
    escreve();
}

function limparCalc() {
    n1 = 0;
    escreve();
}
*/

let num = parseFloat(prompt("Digite um número"));

function escreve() {
    let output = document.querySelector("#output");

    output.innerHTML = num;
}
escreve();


function somar() {
    let num2 = parseFloat(prompt("Digite o número"));

    num += num2;
    escreve();
}


function subtrair() {
    let num2 = parseFloat(prompt("Digite o número"));

    num -= num2;
    escreve();
}

function multiplicar() {
    let num2 = parseFloat(prompt("Digite o número"));

    num *= num2;
    escreve();
}


function dividir() {
    let num2 = parseFloat(prompt("Digite o número"));

    num /= num2;
    escreve();
}


function limparCalc() {
    num = 0;
    escreve();
}