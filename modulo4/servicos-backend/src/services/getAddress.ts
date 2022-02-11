import axios from "axios";
import { Address } from "../types";

const baseUrl = "http://viacep.com.br/ws/";

export const getAddress = async (cep: string): Promise<Address | null> => {
    try {
        const response = await axios.get(`${baseUrl}/${cep}/json`);
        const address: Address = {
            logradouro: response.data.logradouro,
            bairro: response.data.bairro,
            cidade: response.data.localidade,
            estado: response.data.uf
        }
        return address;
    } catch (err) {
        if (err instanceof Error) {
            return null;
        } else {
            return null;
        }
    }
}