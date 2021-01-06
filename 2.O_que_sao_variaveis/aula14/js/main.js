// Pedir para o usuário digitar dois números e mostrar uma mensagem informando se foi aprovado ou não.
// A nota de corte é 5. 
// Contudo, se qualquer uma das notas for zero, reprova automaticamente. 

/*

let n1 = parseFloat(prompt("Digite um número"));

let n2 = parseFloat(prompt("Digite outro número"));

let media = (n1 + n2) / 2;

if ( media <= 5  || n1 == 0 || n2 == 0 ) {
    alert("Você foi reprovado");

} else {
    alert("Parabéns, você foi aprovado!");

}

*/

// Operadores lógicos 

// ! Não (not) 1º

// && E(and)   2º

// || Ou (Or)  3º

let n1 = parseFloat(prompt("Digite um número"));

let n2 = parseFloat(prompt("Digite outro número"));

let media = (n1 + n2) / 2;
console.log(media);

if ( media > 5 && n1 > 0 && n2 > 0 ) {
    alert("Você foi aprovado");

} else {
    alert("Você foi reprovado");
    
}












































