// O loop do while vai garantir que nosso código seja executado pelo menos uma vez 
let numero = parseInt(prompt("Digite um número"));

/*
let indice = 1001;

do {

    document.write(numero + ' X ' + indice + ' = ' + (numero * indice) + '<br/>');

    indice = indice + 1;

} while(indice <= 1000);
document.write("Saiu do loop Do While" + '<br/>' + '<br/>');


for(let i = 1; i <= 1000; i ++) {
    document.write(numero + ' X ' + i + ' = ' + (numero * i) + '<br/>');
}
document.write("Saiu do loop For" + '<br/>');
*/

let indice = 0;

while(indice <= 10) {
    document.write(numero + ' X ' + indice + ' = ' + (numero * indice) + '<br/>');

    indice ++;
}
document.write("Saiu do loop - While" + '<br/>' + '<br/>');


do {
    document.write(numero + ' X ' + indice + ' = ' + (numero * indice) + '<br/>');

    indice ++;

} while (indice <= 20);
document.write("Saiu do loop - Do While" + '<br/>' + '<br/>');

for(let i = 0; i <= 10; i++) {
    document.write(numero + ' X ' + i + ' = ' + (numero * i) + '<br/>'); 

}
document.write("Saiu do loop - For");