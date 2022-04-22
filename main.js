console.clear();
console.log("<------------------Jokempô------------------>");

let prompt = require("prompt-sync")();
let rodadas;
let escolha = ["Pedra", "Papel", "Tesoura"];
let escolhaN;
let pc;
let pontEu = 0;
let pontPc = 0;
let eu;
let resp;
let inicio = 1;

Inicio: for (let i = 0; i < inicio; i++) {
  console.log("Quantas rodadas você deseja jogar?");
  rodadas = +prompt();
  while (
    (isNaN(rodadas) || rodadas != Number.isInteger(rodadas)) &&
    rodadas <= 0
  ) {
    rodadas = +prompt("Insira um valor numerico: ");
  }

  for (let j = 0; j < rodadas; j++) {
    console.log("Sua jogada");
    console.log(" 0 - Pedra, 1 - Papel, 2 - Tesoura ");

    console.log("Digite apenas numeros ");
    escolhaN = +prompt();

    while (
      ((isNaN(escolhaN) || escolhaN != Number.isInteger(escolhaN)) &&
        escolhaN < -1) ||
      escolhaN >= 3
    ) {
      escolhaN = +prompt("Insira um valor numerico de 0 a 2: ");
      console.log();
    }

    pc = Math.floor(Math.random() * 3);
    pc = escolha[pc];
    eu = escolha[escolhaN];

    if (
      (eu == escolha[0] && pc == escolha[2]) ||
      (eu == escolha[1] && pc == escolha[0]) ||
      (eu == escolha[2] && pc == escolha[1])
    ) {
      pontEu++;
      console.log(`Você  ${eu}  VS  ${pc}  Computador`);
      console.log();
      console.log("Ponto para você !!");
      console.log();
    } else if (
      (pc == escolha[0] && eu == escolha[2]) ||
      (pc == escolha[1] && eu == escolha[0]) ||
      (pc == escolha[2] && eu == escolha[1])
    ) {
      pontPc++;
      console.log(`Você  ${eu}  VS  ${pc}  Computador`);
      console.log();
      console.log("Ponto para o Computador !!");
      console.log();
    } else {
      console.log(`Você  ${eu}  VS  ${pc}  Computador`);
      console.log();
      console.log("Empate ninguem pontua!!");
      console.log();
    }
    
  }
  console.log("-------------------Placar------------------");
    console.log(`Você  ${pontEu}  X  ${pontPc}  Computador`);

  if (pontEu > pontPc) {
    console.log("PRABENS VOCÊ É O GANHADOR !!!");
    console.log();
    console.log("Deseja jogar novamente?");
    resp = prompt().toUpperCase();
    while (resp != "SIM" && resp != "NAO") {
      console.log("Responda apenas sim ou nao");
      resp = prompt().toUpperCase();
      console.log();
    }
    if (resp === "SIM") {
      inicio++;
      continue Inicio;
    } else {
      break Inicio;
    }
  } else if (pontEu < pontPc) {
    console.log("QUE PENA VOCÊ PERDEU");
    console.log();
    console.log("Você quer uma revanche? Sim ou Nao? ");
    resp = prompt().toUpperCase();
    while (resp != "SIM" && resp != "NAO") {
      console.log("Responda apenas sim ou nao");
      resp = prompt().toUpperCase();
      console.log();
    }
    if (resp === "SIM") {
      inicio++;
      continue Inicio;
    } else {
      break Inicio;
    }
  } else {
    console.log("Impatou");
    console.log("Você quer jogar novamente para um desempate? Sim ou Nao? ");
    resp = prompt().toUpperCase();
    console.log();
    while (resp != "SIM" && resp != "NAO") {
      console.log("Responda apenas sim ou nao");
      resp = prompt.toUpperCase();
      console.log();
    }
    if (resp === "SIM") {
      inicio++;
      continue Inicio;
    } else {
      break Inicio;
    }
  }
}
