let msg = '';

let fernando = {
    nome: 'Fernando',
    sobrenome: 'César de Jesus Alves',
    rg: '444.222.888.00',
    tel: '46411200'
}

for(propriedade in fernando) {
    console.log(propriedade, ' : ', fernando[propriedade]);
}





document.querySelector('#output').innerHTML = msg;