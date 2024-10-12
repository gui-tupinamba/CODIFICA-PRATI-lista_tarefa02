let pessoas = [
    { 
        nome: 'Guilherme', 
        idade: 19, 
        cidade: 'Boa Vista'
    },

    { 
        nome: 'João', 
        idade: 32, 
        cidade: 'Rio de Janeiro'
    },

    { 
        nome: 'Ana', 
        idade: 22, 
        cidade: 'São Paulo'
    }  
]

for (let i of pessoas) {
    console.log(`Nome: ${i.nome}; idade: ${i.idade}; cidade: ${i.cidade}`)
}