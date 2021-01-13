let n2 = prompt("Digite um número");
n2 = parseFloat(n2);

escreve(n2);


function iniciarCalculo(simbolo) {
    let n1 = document.querySelector('#output').textContent;
    n1 = parseFloat(n1);

    let n2 = prompt('Digite outro número');
    n2 = parseFloat(n2);

    let msg = calcular(simbolo, n1, n2);

    escreve(msg);
}


function escreve(mensagem) {
    let output = document.querySelector('#output');
    output.innerHTML = mensagem;
}


function calcular(simbolo, n1, n2) {

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
