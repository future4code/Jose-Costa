import axios from "axios";
import { baseURL } from "./baseURL";
import { getSubscribers } from "./ex1";

// Exercício 5:

type User = {
    id: string,
    name: string,
    email: string
}

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

const main = async (): Promise<any> => {
    const response = await getSubscribers();
    await notifySubscribers(response);
}