// Pedir para o usuario digitar um numero
let n1 = prompt("Digite um número");
                                                        
// Converter em numero inteiro
n1 = parseInt(n1);

// Pedir para o usuario digitar outro numero
let n2 = prompt("Digite outro número");
                        
// Converter em numero inteiro
n2 = parseInt(n2);
                        
/*
Mostrar num alert o seguinte texto
o resto da divisão de (n1) por (n2) é: (resultado); 
*/
alert(`O resto da divisão de ${n1} por ${n2} é: ${(n1%n2)}`);
                        
            
/*
Mostrar num alert o seguinte texto
o numero (n1) elevado a (n2) é: (resultado); 
*/
alert(`O número ${n1} elevado à ${n2} é igual à: ${(n1**n2)}`);