function filtrarPropriedades(objeto, valorFiltro) {
    let novoObjeto = {};
    for (let i in objeto) {
        if (objeto[i] > valorFiltro) {
            novoObjeto[i] = objeto[i];
        }
    }
    return novoObjeto;
} 

let produto = {
    nome: 'Celular',
    preco: 1450,
    garantia: 12,
    cor: 'Azu',
    memoria: 128
};

let produtoFiltrado = filtrarPropriedades(produto, 1000);
console.log(produtoFiltrado); // Saída: { preco: 1500, memoria: 128 }