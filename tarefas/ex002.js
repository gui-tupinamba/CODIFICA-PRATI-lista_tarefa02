let livro = {
    titulo: 'Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros Curiosos',
    genero: 'Didático',
    autor: 'Aditya Bhargava',
    ano: 2017
    }
    
    let editora = false;
    for(let i in livro) {
        if (i === 'editora') {
            possuiEditora = true
            break
        }
    }
    if(!editora){
        livro.editora = 'Sem informações'
    }
    console.log(livro)