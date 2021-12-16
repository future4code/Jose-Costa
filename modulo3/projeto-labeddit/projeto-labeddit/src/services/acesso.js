import axios from "axios";
import { BASE_URL } from "../constants/url.js";
import { irHome } from "../routes/cordinator";
import { enviarNotificacao } from "../constants/enviarNotificacao";

export const login = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            irHome(navigate)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}

export const cadastro = (body, clear, navigate, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            irHome(navigate);
        })
        .catch((err) => {
            setIsLoading(false)
            enviarNotificacao("error", "Ocorreu um erro!", "Verifique a digitação e tente novamente.");
        })
}