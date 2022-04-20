console.clear();
console.log('<----------Jokempô---------->');

let prompt = require("prompt-sync")();
let rodadas 
let escolha =['Pedra', 'Papel', 'Tesoura']
let pc
let eu



rodadas = +prompt('Quantas rodadas você deseja jogar?');

while (isNaN(rodadas) || rodadas <= 0) {
    rodadas = +prompt('Insira um valor numerico: ');
}
console.log(rodadas);
