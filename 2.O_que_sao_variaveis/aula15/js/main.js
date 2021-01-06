// Para este exercício, tente reescrever a lógica da aula anterior, mas agora utilizando o operador OU ( || )

/*

var n1 = prompt('digite um número');
n1 =  parseFloat(n1);

var n2 = parseFloat(prompt('digite outro número'));

var media = (n1 + n2) / 2;

    
if(media > 5 && n1 > 0 && n2 > 0){
    alert("Parabéns! Você foi aprovado");
} else {
    alert("Descupe, mas não foi dessa vez");
}

*/

let n1 = parseFloat(prompt("Digite um número"));

let n2 = parseFloat(prompt("Digite outro número"));

let media = (n1 + n2) / 2;


if ( media <= 5 || n1 === 0 || n2 === 0 ) {
    alert("Você foi reprovado");

} else {
    alert("Você foi aprovado");
}










































