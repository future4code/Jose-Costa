import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import data from "./data/data.json";
import { checkAge } from "./functions/checkDate";
import { checkCPF } from "./functions/checkCPF";
import { Account } from "./functions/types";

const fs = require("fs");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const error500: string = "Erro interno no servidor. Tente novamente mais tarde.";

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
        console.error(`Falha na conexão. Tente novamente.`);
    }
});

app.post("/account", (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const body = req.body;
        if (!body.name || !body.cpf || !body.birthDate) {
            errorCode = 422;
            throw new Error("Erro na requisição: parâmetros insuficientes.")
        }
        const ageInfo = checkAge(body.birthDate);
        if (!ageInfo) {
            errorCode = 403;
            throw new Error("Erro na requisição: idade mínima(18), formato da data de nascimento: 'DD/MM/AAAA'");
        }
        const validateCPF = checkCPF(body.cpf);
        if (validateCPF) {
            errorCode = 409;
            throw new Error("Erro na requisição: CPF inválido ou já existente.");
        } else {
            const newAccount: Account = {
                name: body.name,
                cpf: body.cpf,
                birthDate: ageInfo.birthDate,
                accountBalance: 0,
                bankStatement: [
                    { value: 0, date: new Date(), desc: "Abertura de conta" }
                ]
            };
            const newData: Account[] = data;
            newData.push(newAccount);
            res.status(200).send({ message: "Conta criada com sucesso"} );
            fs.writeFileSync('src/data/data.json', JSON.stringify(newData, null, '\t'));
        }
    } catch (err: any) {
        res.status(errorCode).send({ message: err.message || error500 })
    }
});

app.get("/test", (req, res) => {
    res.status(200).send("ae")
})