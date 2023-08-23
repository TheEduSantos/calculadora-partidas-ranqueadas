console.log("=================== Calculadora de Partidas Rankeadas ===================")

// console.log("INSIRA SUA QUANTIDADE DE VITÓRIAS E DERROTAS")

// let vitorias = prompt("insira quantas vitórias você teve: ");
// let derrotas = prompt("insira quantas derrotas você teve: ");

let vitorias = 140
let derrotas = 28

function rank(vitorias, derrotas) {
    saldo = vitorias - derrotas;
    let nivel;

    if (saldo < 10) {
        nivel = "Ferro";
    } else if (saldo <= 20) {
        nivel = "Bronze";
    } else if (saldo <= 50) {
        nivel = "Prata";
    } else if (saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo <= 100) {
        nivel = "Lendário";
    } else if (saldo >= 101) {
        nivel = "Imortal";
    } else {
        console.log("Erro!!");
    }

    console.log(`O Herói tem um saldo de ${saldo} está no nível ${nivel}`);

}

rank(vitorias, derrotas);
