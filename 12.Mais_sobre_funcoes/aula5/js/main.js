// Callbacks part 2

function dizOla(praquem, cb) {

    if(typeof cb === 'function') {
        return cb(praquem);
    }

    return console.log('ola', praquem);
}

function boaNoite(praquem) {
    console.log('boa noite', praquem);
}
function boaTarde(praquem) {
    console.log('boa tarde', praquem);
}

dizOla('Maria');
dizOla('Fernando', boaNoite);
dizOla('Daniel', boaTarde);
dizOla('Anna', function(who){
    console.log('Bom dia', who);
});