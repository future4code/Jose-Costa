import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import data from "./data/data.json";
import { checkAge, compareDates } from "./functions/checkDate";
import { checkCPF } from "./functions/checkCPF";
import { Account } from "./functions/types";
import { verifyAccount, getAccountInfo, updateAccount, addBankStat, addBalance, remBalance } from "./functions/accountInfos";

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

// Retorna todas as informações da conta.
app.get("/account/", (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const body = req.body;
        if (!body.cpf || !body.name) {
            errorCode = 422;
            throw new Error("Erro na requisição: parâmetros insuficientes.")
        } if (!verifyAccount(body.cpf, body.name)) {
            errorCode = 401;
            throw new Error("Erro na requisição: dados inválidos.")
        } else {
            const accountInfo = getAccountInfo(body.cpf);
            if (accountInfo) {
                res.status(200).send(accountInfo);
            }
        }
    } catch (err: any) {
        res.status(errorCode).send({ message: err.message || error500 })
    }
});

// Cria conta no banco.
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
            throw new Error("Erro na requisição: idade mínima(18), formato da data de nascimento: 'AAAA-MM-DD' (ISO 8601)");
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
            res.status(200).send({ message: "Conta criada com sucesso" });
            fs.writeFileSync('src/data/data.json', JSON.stringify(newData, null, '\t'));
        }
    } catch (err: any) {
        res.status(errorCode).send({ message: err.message || error500 })
    }
});

// Pagamento e agendamento de contas.
app.post("/account/paybill", (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const body = req.body;
        if (!body.value || !body.desc) {
            errorCode = 422;
            throw new Error("Erro na requisição: parâmetros insuficientes.")
        } if (!verifyAccount(body.cpf, body.name)) {
            errorCode = 401;
            throw new Error("Erro na requisição: dados inválidos.")
        }
        const valueToPay = Number(req.body.value);
        if (!Number.isInteger(valueToPay) || Number(valueToPay) < 0) {
            errorCode = 422;
            throw new Error("Erro na requisição: verifique o valor informado.")
        }
        const accountInfo = getAccountInfo(body.cpf);
        if (accountInfo && accountInfo.accountBalance < valueToPay) {
            errorCode = 422;
            throw new Error("Saldo insuficiente.");
        }
        let payday;
        if (!body.date) {
            payday = { payday: new Date() }
            const newAccountBalance = remBalance(body.cpf, valueToPay);
            if (newAccountBalance || newAccountBalance === 0) {
                addBankStat(body.cpf, valueToPay * -1, payday.payday, body.desc);
                res.status(200).send({ accountBalance: newAccountBalance });
            }
        } else if (body.date) {
            payday = compareDates(body.date);
            if (payday.date === "Invalid Date") {
                errorCode = 403;
                throw new Error("Erro na requisição: data de pagamento inválida. Escolha uma data futura e utilize este formato: 'AAAA-MM-DD' (ISO 8601)");
            } else {
                if ((payday.date.getMonth() === new Date().getMonth() && payday.date.getDate() === new Date().getDate() && payday.date.getFullYear() === new Date().getFullYear())) {
                    const newAccountBalance = remBalance(body.cpf, valueToPay);
                    addBankStat(body.cpf, valueToPay * -1, payday.date, body.desc);
                    res.status(200).send({ accountBalance: newAccountBalance });
                } else if (accountInfo && accountInfo.accountBalance >= valueToPay) {
                    addBankStat(body.cpf, valueToPay * -1, payday.date, `Agendamento: ${body.desc}`);
                    res.status(200).send({ message: "Pagamento agendado com sucesso!" });
                }
            }
        }
    } catch (err: any) {
        res.status(errorCode).send({ message: err.message || error500 })
    }
});

// Transferência entre contas.
app.post("/account/transfer", (req: Request, res: Response) => {
    let errorCode = 500;
    try {
        const body = req.body;
        const value = Number(req.body.value);
        if (!body.cpf || !body.name || !body.receiverName || !body.receiverCpf || !body.value) {
            errorCode = 422;
            throw new Error("Erro na requisição: parâmetros insuficientes.")
        } if (!verifyAccount(body.cpf, body.name) || !verifyAccount(body.receiverCpf, body.receiverName)) {
            errorCode = 401;
            throw new Error("Erro na requisição: dados inválidos.")
        }
        if (!Number.isInteger(value) || Number(value) < 0) {
            errorCode = 422;
            throw new Error("Erro na requisição: verifique o valor informado.")
        }
        const accountInfo = getAccountInfo(body.cpf);
        if (accountInfo && accountInfo.accountBalance < value) {
            errorCode = 422;
            throw new Error("Saldo insuficiente.");
        }
        addBankStat(body.cpf, value * -1, new Date(), `Transferência enviada para ${body.receiverName}`);
        addBankStat(body.receiverCpf, value, new Date(), `Transferência recebida de ${body.name}`);
        res.status(200).send({ message: "Transferência enviada com sucesso!" })
    } catch (err: any) {
        res.status(errorCode).send({ message: err.message || error500 })
    }
})

// Adiciona saldo a uma conta.
app.put("/account/balance", (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const body = req.body;
        if (!body.cpf || !body.name || !body.value) {
            errorCode = 422;
            throw new Error("Erro na requisição: parâmetros insuficientes.")
        } if (!verifyAccount(body.cpf, body.name)) {
            errorCode = 401;
            throw new Error("Erro na requisição: dados inválidos.")
        }
        const valueAdd = Number(req.body.value);
        if (!Number.isInteger(valueAdd) || Number(valueAdd) < 0) {
            errorCode = 422;
            throw new Error("Erro na requisição: verifique o valor informado.")
        } else {
            const newAccountBalance = addBalance(body.cpf, valueAdd);
            res.status(200).send({ accountBalance: newAccountBalance });
            addBankStat(body.cpf, valueAdd, new Date(), "Depósito de dinheiro");
        }
    } catch (err: any) {
        res.status(errorCode).send({ message: err.message || error500 })
    }
});

// Atualiza o saldo de acordo com o extrato e a data atual.
app.put("/account/update", (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const body = req.body;
        if (!body.cpf || !body.name) {
            errorCode = 422;
            throw new Error("Erro na requisição: parâmetros insuficientes.")
        } if (!verifyAccount(body.cpf, body.name)) {
            errorCode = 401;
            throw new Error("Erro na requisição: dados inválidos.")
        } else {
            const accountInfo = updateAccount(body.cpf);
            if (accountInfo) {
                res.status(200).send({ accountBalance: accountInfo.accountBalance });
            }
        }
    } catch (err: any) {
        res.status(errorCode).send({ message: err.message || error500 })
    }
});

