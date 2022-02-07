import axios from "axios";
import { baseURL } from "./baseURL";

/* Exercício 1:
a) GET/subscribers
b) Promise<any>
c) 

async function getSubscribers(): Promise<any> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
}
*/

/* Exercício 2:
a) A função nomeada assícrona é iniciada com a sintaxe 'async', seguida da chamada da função. A arrow function é iniciada com a sintaxe de uma constante e o termo 'async' fica logo depois da iguldadade.
b)

const getSubscribers = async (): Promise<User[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
}
*/

// Exercício 3:
type User = {
    id: string,
    name: string,
    email: string
}

/* a) Aparentemente não.
b) Apesar de não ter dado erro apenas com a tipagem da Promise, é importante mapear o resultado da requisição para termos controle exato do resultado. Para isso, podemos utilizar o map para retornar apenas as propriedades iguais ao type indicado.
*/

const getSubscribers = async (): Promise<User[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((sub: any) => {
        return { id: sub.id, name: sub.name, email: sub.email }
    });
}

// Exercício 4:
type News = {
    title: string,
    content: string,
    date: number
}

const news = {
    title: "Maior São João do Mundo está de volta",
    content: "Depois de 16 anos de pandemia, o maior evento da cidade está de volta...",
    date: Date.now()
}

const createNews = async (news: News): Promise<void> => {
    return await axios.put(`${baseURL}/news`, news);
}

/* Exercício 5:
const notifySubscribers = async (subs: User[]): Promise<void> => {
    for (let item of subs) {
        try {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: item.id,
                message: "Nova notícia adicionada!"
            });

            console.log(`ID ${item.id} notificado com sucesso!`)
        } catch (err: any) {
            console.log(`Erro: ID ${item.id} não notificado.`)
        }
    }
} 
*/

// Exercício 6:
// a) Promise.all junta todas as Promises e retorna apenas um resulto quando todas forem resolvidas.
// b) A vantagem é a eficiência no tempo de tratativa de dados junto a API, obtendo respostas com um tempo mais curto e num conjunto de dados.

const notifySubscribers = async (subs: User[]): Promise<void> => {
    const request = [];
    try {
        for (let item of subs) {
            request.push(
                axios.post(`${baseURL}/notifications`, {
                    subscriberId: item.id,
                    message: "Nova notícia adicionada!"
                }));
        }
        await Promise.all(request);
        console.log(`Notificações enviadas com sucesso.`)
    } catch (err: any) {
        console.log(`Ocorreu algum erro durante as notificações.`)
    }
}

const main = async (): Promise<any> => {
    const response = await getSubscribers();
    await notifySubscribers(response);
}

// main();

// Desafio:
const sayHello = () => {
    new Promise((resolve, reject) => {
        setTimeout(() => { resolve("Oi") }, 5000);
    }).then((res) => { console.log(res)}) 
}

sayHello();
