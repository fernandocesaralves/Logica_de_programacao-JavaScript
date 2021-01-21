//matriz
var alunos = [
    {nome: 'Maria', notas: [2,5,8,9]},
    {nome: 'José', notas: [2,1,5,8]},
    {nome: 'João', notas: [1,5,3,2]},
    {nome: 'Ana', notas: [4,5,3,8]},
    {nome: 'Lucia', notas: [2,1,8,5]}
];

let mediaAlunos = 0;

var msg = "";

for(let i = 0; i < alunos.length; i++) {
    msg += '<p><b>Nome: '+ alunos[i].nome + '</b></p>';
    var notas = alunos[i].notas;
    msg += '<p>Notas: ' + notas.join(' | ') +'</p>';

    let totalNotas = 0;
    for(let j = 0; j < notas.length; j++) {
        totalNotas += notas[j];
    }
    let media = totalNotas / notas.length;
    mediaAlunos += media;
    msg += '<p>A média é: '+ media +'</p><hr>'
}

msg += '<p>A média de todos os alunos é: ' + (mediaAlunos / notas.length) + '</p>';

document.querySelector('#output').innerHTML = msg;