let alunos = [
    {   
        nome: 'João',
        nota1: 2.5,
        nota2: 7.8,
    },

    {   
        nome: 'Maria',
        nota1: 6.2,
        nota2: 8.7,
    },

    {   
        nome: 'Pedro',
        nota1: 4.5,
        nota2: 6.8,
    }
]

for (let i of alunos) {
    let media = ((i.nota1 + i.nota2) / 2)
    console.log(`Aluno: ${i.nome}; Média: ${media.toFixed(1)}`)
}

