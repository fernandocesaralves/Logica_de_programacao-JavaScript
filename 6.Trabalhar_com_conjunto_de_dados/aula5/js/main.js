
let numeros = new Array(25, 30, 45, 28, 0, 12, 78, 64);

let somaDosPares = somaOsPares(numeros);

alert('A soma dos pares é: ' + somaDosPares);

function somaOsPares(arr) {
    let soma = 0;
    for(let i = 0; i < arr.length; i++) {
   console.log(i);
   console.log(arr[i]);

    if( !isNaN(arr[i]) && arr[i] % 2 === 0) {
    soma += arr[i];
   }
}

return soma;
}
