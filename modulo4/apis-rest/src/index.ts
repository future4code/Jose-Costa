import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, User } from "./data/users";

const fs = require("fs");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor rodando em http://localhost: ${address.port}`);
    } else {
        console.error(`Falha na conexão. Tente novamente.`);
    }
});

// Exercício 1 e 3:
app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        if (req.query.name) {
            const name = req.query.name;
            const result: User[] = users.filter((user) => { return user.name === name });

            if (result.length === 0) {
                return res.status(200).send("Nenhum usuário encontrado.")
            } else {
                return res.status(200).send(result);
            }
        } else {
            return res.status(200).send(users);
        }
    } catch (err: any) {
        res.status(errorCode).send({ message: err.message || "Erro interno. Aguarde um momento e tente novamente." });
    }
});

// Exercício 2:
app.get("/users/:type", (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const type: string = req.params.type.toUpperCase();
        if (type !== "ADMIN" && type !== "NORMAL") {
            errorCode = 422;
            throw new Error("Erro na requisição: insira um type válido.")
        }
        const result: User[] = users.filter((user) => { return user.type === type });
        if (result.length === 0) {
            res.status(200).send("Nenhum usuário encontrado.")
        } else {
            res.status(200).send(result);
        }
    } catch (err: any) {
        res.status(errorCode).send({ message: err.message || "Erro interno. Aguarde um momento e tente novamente." });
    }
});

// Exercício 4:
app.put("/users", (req: Request, res: Response) => {
    let errorCode = 500.
    try {
        const { id, name, email, type, age } = req.body;
        if (!name || !email || !type || !age) {
            errorCode = 422;
            throw new Error("Erro na requisição: faltando propriedades no body (name, email, type, age).")
        }
        if (isNaN(Number(age))) {
            errorCode = 422;
            throw new Error("Erro na requisição: verifique o campo 'age' está como number.")
        }
        if (type.toUpperCase() !== "ADMIN" && type.toUpperCase() !== "NORMAL") {
            errorCode = 422;
            throw new Error("Erro na requisição: insira um type válido.")
        }
        users.push({ id: users.length +1, name, email, type, age});
        res.status(200).send(users);
    } catch (err: any) {
        res.status(errorCode).send({ message: err.message || "Erro interno. Aguarde um momento e tente novamente." });
    }
});