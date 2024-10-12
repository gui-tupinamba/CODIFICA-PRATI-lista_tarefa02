let estoque = [
    { 
        produto: 'Camiseta', 
        quantidade: 10, 
        minimo: 5 
    },

    { 
        produto: 'Calça', 
        quantidade: 3, 
        minimo: 5 
    },

    { 
        produto: 'Tênis', 
        quantidade: 8, 
        minimo: 7 
    },
    
    { 
        produto: 'Boné', 
        quantidade: 2, 
        minimo: 3 
    }

];
estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2;
    }
});

console.log(estoque);