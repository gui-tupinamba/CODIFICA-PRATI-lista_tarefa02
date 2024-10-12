const empresa = {
    nome: 'Minha Empresa',
    departamentos: [
        { 
            nome: 'Vendas', 
            funcionarios: ['João', 'Maria', 'Pedro'] 
        },

        { 
            nome: 'Marketing', 
            funcionarios: ['Ana', 'Bruno'] 
        },

        { 
            nome: 'TI', 
            funcionarios: ['Carlos', 'Daniela'] 
        }
    ]
}

for (let departamento in empresa.departamentos) {
    console.log('======================================================')
    console.log(`Departamento => ${empresa.departamentos[departamento].nome}`);
    for (let funcionario of empresa.departamentos[departamento].funcionarios){
        console.log(`Funcionário: ${funcionario}`);
    }
}