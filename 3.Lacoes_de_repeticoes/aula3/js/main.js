/*
Para esta tarefa reescreva o código da aula anterior, mas inserindo uma linha divisória sempre que mudar a dezena. 
Ou seja, entre o 10 e o 11, entre o 20 e o 21 e assim por diante.
*/

// Dica: para escrever uma linha horizontal, use a tag <hr>

let num = parseInt(prompt("Digite um número"));
/*
for (let i = 1; i <= 100; i ++) {
    document.write(`${num} X ${i} = ${(num*i)}<br/>`);
    if(i % 10 == 0) {
        document.write("<hr/>")
    };
};
*/

let indice  = 0;

while(indice <= 1000) {
    document.write(num + ' X ' + indice + ' = ' + (num * indice) + '<br/>');

    if(indice % 10 === 0 && indice > 0) {
        document.write('<hr/>');
    }

    indice = indice + 1;

}