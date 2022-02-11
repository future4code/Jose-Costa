import { Response, Request } from "express";
import connection from "../data/connection";
import { getAddress } from "../services/getAddress";
import { sendEmail } from "../services/mailTransporter";

const { randomUUID } = require("crypto");

export const createUser = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const { email, password, cep, numero, complemento } = req.body;
        if (!email || !password || !cep || typeof email !== "string" || typeof password !== "string" || typeof cep !== "string") {
            errorCode = 422;
            throw new Error("Erro: Parâmetros inválidos.")
        }
        if (!numero || isNaN(numero) || parseInt(numero) < 0) {
            errorCode = 422;
            throw new Error("Erro: Insira um número válido.")
        }
        if (complemento && typeof complemento !== "string") {
            errorCode = 422;
            throw new Error("Erro: Parâmetros inválidos.")
        }
        const address = await getAddress(cep);
        if (address === null) {
            errorCode = 422;
            throw new Error("Erro: CEP inválido.");
        }
        await connection("servicos_address").insert(
            {
                id: randomUUID(),
                logradouro: address.logradouro,
                numero: parseInt(numero),
                complemento: complemento || "n/a",
                bairro: address.bairro,
                cidade: address.cidade,
                estado: address.estado
            }
        );
        await sendEmail(email, "Confirmação de cadastro", 
        `<h3>Boas vindas!</h3> 
        <p>Cadastro realizado com sucesso. Segue seus dados:</p>
        <p>Email: ${email} - senha: ${password}</p>
        `);
        res.status(200).send({ message: "Endereço adicionado com sucesso!" });
    } catch (error) {
        if (error instanceof Error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}