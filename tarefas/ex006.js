let funcionarios = [
    {
        nome: 'João',
        cargo: 'Dev Junior',
        salario: 5000
    },

    {
        nome: 'Maria',
        cargo: 'Dev Pleno',
        salario: 8000
    },

    {
        nome: 'Pedro',
        cargo: 'Dev Senior',
        salario: 12000
    },

    {
        nome: 'Ana',
        cargo: 'Gerente',
        salario: 15000
    }
]

for (let i of funcionarios) {
    if (i.salario >= 8000){
        console.log(i.nome)
    }
}