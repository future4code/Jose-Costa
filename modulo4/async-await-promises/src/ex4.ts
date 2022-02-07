import axios from "axios";
import { baseURL } from "./baseURL";

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
