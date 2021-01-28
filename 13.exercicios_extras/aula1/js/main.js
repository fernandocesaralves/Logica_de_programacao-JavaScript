// Saltos

function testeSalto() {
    for(var i = 0; i < 10; i++) {
        if(i === 5) {
            break;
        }
        console.log(i);
    }
    console.log('------------');
    return 'Fim da função';
}

var teste = testeSalto();
console.log(teste);