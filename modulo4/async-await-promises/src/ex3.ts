import axios from "axios";
import { baseURL } from "./baseURL";

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