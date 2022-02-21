import { Request, Response } from "express";
import { createUser, getUserByEmail } from "../data/connection";
import { generateId } from "../services/idGenerator";
import { generateToken } from "../services/tokenGenerator";

export const login = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const { email, password } = req.body;

        if (!email || !email.includes("@")) {
            throw new Error("Insira um e-mail válido");
        }
        if (!password || password.length < 6) {
            throw new Error("Insira um password válido. Mínimo de caracteres: 6");
        }

        const user = await getUserByEmail(email);
        if (user.password !== password) {
            throw new Error("Senha inválida.")
        }

        const token = generateToken(user.id);
        res.status(200).send({ token });
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}