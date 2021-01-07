let nome = prompt("Digite o seu nome");
let comprimentoNome = nome.length;

switch(comprimentoNome) {

    case 1: 
        alert("Seu nome é muito curto");
        break;
    case 2: 
        alert("Nome pequeno");
        break;
    case 3:
        alert("Já é um começo");
        break;
    case 4:
        alert("Que nome maneiro");
        break;
    case 5:
        alert("Eu estudei com uma pessoa de nome parecido");
        break;
    default:
        alert("Que nome bacana!");

}

let numero = prompt("Digite um número");

switch(typeof numero) {

    case "number":
        alert('É número');
        break;
    case "string":
        alert("É texto");
        break;

}

if(typeof numero === "number") {
    alert("É número");

} else if(typeof numero === "string") {
    alert("É string");
    
}


































