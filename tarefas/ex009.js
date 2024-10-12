let clientes = [
    {
        nome: 'João',
        idade: 26,
        cidade: 'São Paulo'
    },

    {
        nome: 'Maria',
        idade: 32,
        cidade: 'Rio de Janeiro'
    },

    {
        nome: 'Pedro',
        idade: 35,
        cidade: 'Belo Horizonte'
    },
]

let qtdMaiorDeTrinta = 0
clientes.forEach(cliente => {
    if (cliente.idade > 30){
        qtdMaiorDeTrinta ++
    }
})

console.log(`Quantidade de clientes maior de 30 anos: ${qtdMaiorDeTrinta}`)