let produtos = [
    {
        nome: 'Celular',
        preco: 2300.00,
        desconto: 0.1,
    },

    {
        nome: 'Notebook',
        preco: 4500.00,
        desconto: 0.1,
    },

    {
        nome: 'Tablet',
        preco: 1500.00,
        desconto: 0.1,
    }
]

produtos.forEach(produto => {
    let precoComDesconto = produto.preco * (1 - produto.desconto)
    console.log(`${produto.nome} => Preço normal: R$ ${produto.preco.toFixed(2)}; Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`)
})