let transacoes = [
    {
        tipo: 'entrada',
        valor: 1000.00,
    },

    {
        tipo: 'saida',
        valor: 500.00,
    },

    {
        tipo: 'entrada',
        valor: 2000.00,
    },

    {
        tipo: 'saida',
        valor: 300.00,
    },

    {
        tipo: 'saida',
        valor: 1500.00,
    },
]

let saldo = 0
transacoes.forEach(transacao => {
    if(transacao.tipo === 'entrada'){
        saldo += transacao.valor
    } else if (transacao.tipo === 'saida'){
        saldo -= transacao.valor
    }
})

console.log(`Saldo final: R$ ${saldo.toFixed(2)}`)