// Fazer jogador1 digitar um numero
let playerOne = parseInt(prompt("jogador 1, digite um número"));
                
// Fazer jogador2 digitar outro numero
let playerTwo = parseInt(prompt("Jogador 2, digite um número"));
                
// Se forem iguais, mostrar mensagem 'empate'
if( playerOne === playerTwo ) {
    alert("Deu empate");

} else {
    // Sortear um numero entre 0 e 1 
    let x = parseInt(Math.random() * 2);
    console.log(x);

    // Se o numero sorteado for 0, ganha quem escolher o numero MENOR 
    if( x === 0 && playerOne < playerTwo ) {
        alert("Jogador 1 venceu!")
    
    // Se o numero sorteado for 1, ganha quem escolher o numero MAIOR
    } else if( x === 1 && playerOne > playerTwo ) {
        alert("Jogador 1 venceu");

    } else {
        alert("Jogador 2 venceu!");

    }

}











































