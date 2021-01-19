let sorteados = obtemNumerosSortidos();
let output = document.querySelector('#output');
let msg = '';

msg += '<p/>Numeros sorteados: </p>';
msg += '<p>' + sorteados.join(', ') + '</p>';

let meusNumeros = [4, 50, 36, 41, 8, 10];

for(let i = 0; i < meusNumeros.length; i++) {
    msg += '</p>' + meusNumeros[i] + ': ';
   msg += (sorteados.indexOf(meusNumeros[i]) === -1) ? 'Errou' : 'Acertou'
   msg += '</p>'
}

output.innerHTML = msg;

function obtemNumerosSortidos() {
    let sorteados = [];

    function sortear() {
        return Math.floor(Math.random() * 60);
    }

    while(sorteados.length < 6) {
        let sorteado = sortear();
        if(sorteados.indexOf(sorteado) === -1) {
            sorteados[sorteados.length] = sorteado;
        }
        console.log(sorteados.length, sorteado);
    }
    return sorteados;
}

console.log(sorteados);

