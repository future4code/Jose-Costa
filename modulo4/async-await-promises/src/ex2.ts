import axios from "axios";
import { baseURL } from "./baseURL";

// Exercício 2:
// a) A função nomeada assícrona é iniciada com a sintaxe 'async', seguida da chamada da função. A arrow function é iniciada com a sintaxe de uma constante e o termo 'async' fica logo depois da iguldadade.

const getSubscribers = async (): Promise<any> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
}
