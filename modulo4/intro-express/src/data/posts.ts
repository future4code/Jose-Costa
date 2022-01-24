// Exercício 6: 
// Justificativa: Achei melhor criar num array separado do Users por questão de organização, facilidade no momento de listagem.

import { Post } from "../types";

export const posts: Post[] = [
    {
        postId: 1,
        title: "Como é a vida?",
        body: "A vida é sinistra, porém não é.",
        userId: 1,
    },
    {
        postId: 2,
        title: "Como não é a vida?",
        body: "A vida não é sinistra.",
        userId: 2,
    },
]