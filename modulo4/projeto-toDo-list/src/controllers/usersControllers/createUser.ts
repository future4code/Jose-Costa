import { Request, Response } from "express";
import connection from "../../connection";
import { User } from "../../models/Users";
import validator from "validator";
import * as Type from "../../types/Type";
const { randomUUID } = require('crypto');

export const createUser = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const { name, nickname, email } = req.body;
        if (!name || !nickname || !email) {
            errorCode = 422;
            throw new Error("Erro: Parâmetros insuficientes.")
        } if (typeof name !== "string" || typeof nickname !== "string") {
            errorCode = 422;
            throw new Error("Erro: parâmetros inválidos.");
        }
        if (!validator.isEmail(email)) {
            errorCode = 422;
            throw new Error("Erro: E-mail inválido.")
        }
        if (await User.checkExistence({ email })) {
            errorCode = 409;
            throw new Error("Erro: Já existe uma conta cadastrada nesse e-mail.")
        }

        const newUser: Type.User = {
            user_id: randomUUID(),
            name,
            nickname,
            email
        }

        await connection("Users").insert(newUser);
        
        res.send({ message: "Conta criada com sucesso!" });
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}