let notas = [
    [5,6,4,3], [2,8,5,6], [3,6,4,8], [2,8,4,9]
];
let output = document.querySelector('#output');
let msg = '';

document.querySelector('#output').innerHTML = msg;

for(let i = 0; i < notas.length; i++) {
    console.log(notas[i]);

    msg += '<p>Notas do ' + (i+1) + ' bimestre: ' + notas[i].join(', ') + '<p/>'

    // i = 0
    // notas[0] = [5,6,4,3]
    let totalBimestre = 0;
    for(let j = 0; j < notas[i].length; j++) {
        console.log(notas[i][j]);
        totalBimestre += notas[i][j];
    }
    let mediaBimestre = totalBimestre / notas[i].length;
    msg += '<p>A média do' + (i+1) + ' bimestre é: ' + mediaBimestre + '</p><hr>'
    console.log('mediaBimestre', mediaBimestre);
}

output.innerHTML = msg;