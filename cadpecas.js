const listPecas = ["Freio", "Volante", "Farol", "Carburador", "Motor", "Banco", "Porta", "Para-brisa"];

console.log(listPecas)
var nPecas = 10 - listPecas.length


if (nPecas > 0)
    console.log(nPecas + " Cadastros disponíveis.");
else console.log("Limite máximo de cadastro atingido. Novos cadastros não serão aceitos.");

var peso = 500;

if (peso < 100) {
    console.log("Peso atual é " + peso + " gramas. Peso mínimo necessário são 100 gramas. Cadastro negado.");
}

else { console.log("Peso atual da peça é " + peso + " gramas. Mínimo de 100 gramas atingido. Cadastro aceito."); }


let nomePecas = "retrovisor";

if (nomePecas.length > 3) {
    console.log("O nome da peça (" + nomePecas + ") é aceito. Cadastro realizado.")
}
else if (nomePecas.length == 0) {
    console.log("O nome da peça não pode estar vazio. Cadastro negado.")
}

else {
    console.log("O nome da peça (" + nomePecas + "), deve possuir mais do que 3 caracteres. Cadastro negado.")
}
