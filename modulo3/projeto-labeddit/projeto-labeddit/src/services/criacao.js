import axios from "axios";
import { BASE_URL } from "../constants/url.js";
import { enviarNotificacao } from "../constants/enviarNotificacao";

export const createPost = (token, body, clear, setLoading, atualizar, setAtualizar) => {
    setLoading(true)
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: token
        }
    })
        .then((res) => {
            setLoading(false);
            setAtualizar(!atualizar);
            clear();
        })
        .catch((err) => {
            setLoading(false);
            enviarNotificacao("error", err.response.data);
        })
}