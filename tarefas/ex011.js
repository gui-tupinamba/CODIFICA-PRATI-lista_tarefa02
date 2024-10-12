let pedidos = [
    {
        cliente: 'José',
        produto: 'Café',
        quantidade: 3
    },

    {
        cliente: 'Maria',
        produto: 'Batata Frita',
        quantidade: 2
    },

    {
        cliente: 'José',
        produto: 'Pizza',
        quantidade: 1
    },

    {
        cliente: 'Maria',
        produto: 'Pizza',
        quantidade: 1
    },

    {
        cliente: 'João',
        produto: 'Batata Frita',
        quantidade: 1
    }

]
let qtdPorCliente = {}

pedidos.forEach(pedido => {
    if (qtdPorCliente[pedido.cliente]) {
        qtdPorCliente[pedido.cliente] += pedido.quantidade;
    } else {
        qtdPorCliente[pedido.cliente] = pedido.quantidade;
    }
    
})
console.log(qtdPorCliente)