// Pedir para o usuário digitar um número e mostrar a tabuada desse búmero de 1 à 1000

let num = parseInt(prompt("Digite um número"));

/*
for (let i = 0; i <= 1000; i++) {
    document.write(num + " X " + i + " = " + (num * i) + "<br/>");
};
*/

/* 
let indice = 1;

while(indice <= 1000) {
    document.write(num + " X " + indice + " = " + (num * indice) + "<br/>");
    
    indice = indice + 1;
}

document.write("saiu do loop");
*/

let i = 1;

while(i <= 10) {
    document.write(`${num} X ${i} = ${(num*i)} <br/>`);

    i ++;
}