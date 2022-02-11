import axios from "axios";
import { baseURL } from "./baseURL";
import { getSubscribers } from "./ex1";

// Exercício 6:

type User = {
    id: string,
    name: string,
    email: string
}

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