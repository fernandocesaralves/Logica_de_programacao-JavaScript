
let dias = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado');

let hoje = new Date(); // 0 - Domingo; 1 - Segunda ... 6 - Sábado
let diaSemana = hoje.getDay(); // Retorna o dia da semana


alert(dias[diaSemana]);