

const dataAtual = 2021
let nascUser = 1987 //Ano de nascimento do usuário
let participantes = ["Adrian", "Bruno", "Carlos", "Danielle", "Elaine", "Fabíola"] //Array dos participantes
let palestrantes = ["Gerson", "Hilda", "Iran"] //Array dos palestrantes
let data = new Date();
let diaDaSemana = data.getDay();
let diaAtual = data.getDate();
let mesAtual = data.getMonth() + 1;
let anoAtual = data.getFullYear();
let diaDoEvento = 1
let mesDoEvento = 10
let anoDoEvento = 2021



// Verificar se a data do evento é válida ao fazer comparação com a data atual
console.log("========================================")
console.log("VERIFICAÇÃO SE A DATA DO EVENTO É VÁLIDA")
console.log("========================================\n")

console.log("Data atual: " + diaAtual + " - " + mesAtual + " - " + anoAtual)
console.log("Data do evento: " + diaDoEvento + " - " + mesDoEvento + " - " + anoDoEvento + "\n")

if (anoAtual > anoDoEvento) {
    console.log("Data inválida. Não será possível se cadastrar para o evento.")
} else if (mesAtual > mesDoEvento) {
    console.log("Data inválida. Não será possível se cadastrar para o evento.")
} else if (diaAtual >= diaDoEvento && mesAtual >= mesDoEvento) {
    console.log("Data inválida. Não será possível se cadastrar para o evento.")
}
else {
    console.log("DATA VÁLIDA. CADASTRO REALIZADO.")
}




//Listagem dos Arrays de usuários e participantes.
console.log("\n\n==============================================================")
console.log("LISTAGEM DE PARTICIPANTES E PALESTRANTES DO EVENTO SELECIONADO")
console.log("==============================================================")

console.log("\nIremos listar os participantes e palestrantes do evento selecionado. \n\nLISTA DE PARTICIPANTES: \n")

let contPart = 0
while (contPart != participantes.length) {
    console.log(participantes[contPart]);
    contPart++;
}

console.log("\n\nLISTA DE PALESTRANTES: \n")

let contPale = 0
while (contPale != palestrantes.length) {
    console.log(palestrantes[contPale])
    contPale++;
}







// Listar os participantes e palestrantes. Diminuí o número de participantes de 100 para 10, para ser mais prático realizar testes.
console.log("\n\n==============================================================================================================================")
console.log("VERIFICAR SE O NÚMERO DE PARTICIPANTES E PALESTRANTES DO EVENTO É INFERIOR A 100 (10) E COMUNICAR SE É POSSÍVEL FAZER CADASTRO")
console.log("==============================================================================================================================")
let vagas = 10 - participantes.length - palestrantes.length

console.log("\nSão permitidos 10 pessoas por evento, por isso, seu cadastro só será possível caso haja vaga para o evento.\n")
console.log("Total de participantes: "+participantes.length)
console.log("Total de palestrantes: "+palestrantes.length)

if (vagas > 0)
console.log("Vagas disponíveis para o evento escolhido: " +vagas)
else {
    console.log("Vagas disponíveis para o evento escolhido: 0")
}

if (vagas > 0 )
console.log("\nCadastro realizado!")
else {
    console.log("\nCadastro não disponível por não haver vagas para o evento escolhido.")
}






// Verificação da idade do Usuário feita, aceitando o cadastro caso o usuário faça 18 anos no ano vigente
console.log("\n\n===============================")
console.log("VERIFICAÇÃO DA IDADE DO USUÁRIO")
console.log("===============================")

console.log('\nÉ necessário ser maior de idade ou completar 18 anos ainda este ano para se cadastrar no evento. Qual o seu ano de nascimento?')

let verIdade = dataAtual - nascUser

console.log("Verificamos que você nasceu em " + nascUser +". Sua idade é (ou será) " + verIdade + " anos de idade.")

if (verIdade < 18)
console.log("Não será possível realizar seu cadastro, devido a sua idade atual de "+verIdade+" anos de idade.");
else {
    console.log("Sua idade atual é permitida para realizar o cadastro.")
}



