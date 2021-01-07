/*
Para esse exercício, tente reescrever a lógica que fizemos em um exercício anterior, 
de modo a torná-la mais curta. Essa tarefa tem por objetivo te fazer pensar em como 
solucionar MELHOR um problema. Não tem resposta certa ou errada aqui. Casa pessoa pode 
pensar em maneiras diferentes de resolver o mesmo problema. O que vale aqui é exercitar sua lógica.
*/

/*
let nJogador1 = parseInt(prompt(" um número"));

let nJogador2 = parseInt(prompt("Digite outro número"));

if ( nJogador1 === nJogador2 ) {
    alert("Deu empate");

} else {
    let nSorteado = parseInt(Math.random() * 2);
    console.log(nSorteado);

    if ( nSorteado === 0 && nJogador1 < nJogador2 ) {
        alert("Jogador 1 venceu");
    
    } else if ( nSorteado === 1 && nJogador1 > nJogador2 ) {
        alert("Jogador 1 venceu");
    
    } else {
        alert("Venceu o jogador 2");
    }

}
*/
let nJogador1 = parseInt(prompt(" Jogador 1, digite um número"));

let nJogador2 = parseInt(prompt("Jogador 2, digite um número"));

if (nJogador1 === nJogador2) {
    
    alert("Vocês empataram");


} else {
    let nSorteado = parseInt(Math.random() * 2);
    console.log(nSorteado);
    
    if ( (nSorteado === 0 && nJogador1 < nJogador2) || (nSorteado === 1 && nJogador1 > nJogador2) ) {
        
        alert("Jogador 1 venceu!");

    } else {

        alert("Venceu o jogador 2");

    }

}



































