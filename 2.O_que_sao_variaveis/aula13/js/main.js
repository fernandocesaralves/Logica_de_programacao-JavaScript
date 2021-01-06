let nJ1 = prompt("Digite o número do jogador 1");
nJ1 = parseInt(nJ1);

let nJ2 = prompt("Digite o número do jogador 2");
nJ2 = parseInt(nJ2);

if ( nJ1 === nJ2 ) {
    alert("Vocês empataram");

} else {
    let nSorteado = parseInt(Math.random() * 2);
    console.log(nSorteado);
    
    if ( nSorteado === 0 ) {
        if ( nJ1  < nJ2 ) {
            alert("Ganhou o jogador 1");

        } else {
            alert("Ganhou o jogador 2");
        }

    } else {
        if ( nJ1 > nJ2 ) {
            alert("Ganhou o jogador 1");

        } else {
            alert("Ganhou o jogador 2");

        }

    }

} 











































