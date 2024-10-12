let vendas = [
    {
        produto: 'Sapato',
        quantidade: 1,
        valor: 100,
    },

    {
        produto: 'Camiseta',
        quantidade: 1,
        valor: 345,
    },

    {
        produto: 'Calça',
        quantidade: 3,
        valor: 160,
    },
]

let totalVendas = 0
vendas.forEach(venda => {totalVendas += (venda.quantidade * venda.valor)})

console.log('Total das vendas:', totalVendas.toFixed(2))