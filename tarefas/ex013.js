// Criando o objeto carrinho
let carrinho = {
    itens: [
        { 
            nome: 'Camiseta', 
            quantidade: 2, 
            precoUnitario: 20 
        },

        { 
            nome: 'Calça', 
            quantidade: 1, 
            precoUnitario: 50 
        },

        { 
            nome: 'Tênis', 
            quantidade: 3, 
            precoUnitario: 80 
        }
    ]
};

let valorTotal = 0;
carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
});

console.log('O valor total do carrinho é:', valorTotal);