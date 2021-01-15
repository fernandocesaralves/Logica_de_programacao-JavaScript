// Chegou a hora de praticar. Para este exercício, crie um novo documento chamado 06.
// 03_exercicio.html a partir do base. Sua missão será criar um array com três objetos. 
// Cada objeto deverá ter duas propriedades (nome e email). 

// Depois, basta mostrar na tela (melhor se for utilizando a div com id="output") 
// e nome e o email de cada um dos objetos da array criada acima.

/*
let clientes = [
    {"nome": "Fernando", "email": "lalala@gmail.com"}, 
    {"nome": "Thais", "email": "thais@gmail.com"}, 
    {"nome": "José", "email": "jose@gmail.com"}
];

let output = document.querySelector('#output');

msg = '';

for(let i = 0; i < clientes.length; i++) {
    msg += 'Cliente: ' + clientes[i].nome + ' - ';
    msg += 'E-mail: ' + clientes[i].email + '<br>';
}

output.innerHTML = msg;
*/

let user1 = new Object();
user1.nome = 'Maria';
user1.email = 'maria@server.com';

let user2 = new Object();
user2.nome = 'João';
user2.email = 'joao@server.com';

let user3 = new Object();
user3.nome = 'Jose'
user3.email = 'jose@server.com';

let users = new Array(user1, user2, user3);

console.log(users);

let msg = '';
let x = 0;
while(users[x]) {
    console.log(users[x].nome);
    msg += users[x].nome + ' - ' + users[x].email + '<br>';
    x++;
}

document.querySelector('#output').innerHTML = msg;