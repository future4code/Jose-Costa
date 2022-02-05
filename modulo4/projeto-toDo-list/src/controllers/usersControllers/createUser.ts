import { Request, Response } from "express";
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
        const result = await User.create(newUser);
        res.send({ message: result });
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}