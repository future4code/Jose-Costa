// Exercício 3:

// a) 

type InfoPost = {
    autor: string,
    texto: string
}

const posts: InfoPost[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

console.log(posts[1])

// b) Entradas: objeto do post e string do nome do autor e saída um objeto resultado do método filter.

function buscarPostsPorAutor(posts: InfoPost[], autorInformado: string): object {
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}

console.log(buscarPostsPorAutor(posts, "Dobby"))