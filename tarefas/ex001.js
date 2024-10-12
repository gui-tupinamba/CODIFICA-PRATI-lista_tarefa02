let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    cor: 'Prata',
    ano: 2023
};
    for (let i in carro) {
        console.log(`${i}: ${carro[i]}`);
    }