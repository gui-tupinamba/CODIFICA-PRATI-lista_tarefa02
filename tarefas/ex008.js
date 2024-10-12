let filmes = [
    {
        titulo: 'Star Wars: A New Hope',
        diretor: 'George Lucas',
        ano: 1977
    },

    {
        titulo: 'Inception',
        diretor: 'Christopher Nolan',
        ano: 2010
    },

    {
        titulo: 'The Dark Knight',
        diretor: 'Christopher Nolan',
        ano: 2008
    }
]

let titulos = []
filmes.forEach(filme => {
    titulos.push(filme.titulo)
})

console.log(titulos)