let nome = "Edigar"
let idade = 16
let cidade = "General Sampaio"
let profissao = "Médico"
let anoAtual = 2025
const anoNascimento = anoAtual - idade
let salario = 10000
let bonus = 3000

let salariodomes = salario + bonus
let salariodoano = salariodomes*12
let salariodobro = salariodoano*2 

alert (`  ========= RELATÓRIO DO USUÁRIO =========
    Nome: ${nome}
    Idade: ${idade} 
    Ano de nascimento ${anoNascimento}
    Cidade: ${cidade}
    Profissão: ${profissao}
    
    Salário base: U$${salario}
    Bônus: U$${bonus}
    Total mensal: U$${salariodomes}
    Total ano: U$${salariodoano}
    Total anual (salário dobrado): U$${salariodobro}
    =====================================`) 