// Callbacks

function teste1() {
    console.log('teste1 chamado');
}
function teste2(p) {
    console.log('teste2 chamado recebendo p', p);
}

function executa(cb) {
    console.log('executa chamado');

    if(typeof cb === 'function') {
        cb('teste de parâmetro de callback');
    }
}

// executa();
// executa(teste2);

executa(function(x){
    console.log('função anônima', x);
});