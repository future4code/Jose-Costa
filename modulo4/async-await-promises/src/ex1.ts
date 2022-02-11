import axios from "axios";
import { baseURL } from "./baseURL";

// Exercício 1:
// a) GET/subscribers
// b) Promise<any>

export async function getSubscribers(): Promise<any> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
}

const main = async (): Promise<any> => {
    const response = await getSubscribers();
    console.log(response);
}