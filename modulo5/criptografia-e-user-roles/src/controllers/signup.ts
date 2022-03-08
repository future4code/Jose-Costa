import { Request, Response } from "express";
import { createUser } from "../data/connection";
import { HashManager } from "../services/HashManager";
import { generateId } from "../services/idGenerator";
import { generateToken } from "../services/tokenGenerator";

export const signup = async (req: Request, res: Response) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !email.includes("@")) {
            throw new Error("Insira um e-mail válido");
        }
        if (!password || password.length < 6) {
            throw new Error("Insira um password válido. Mínimo de caracteres: 6");
        }

        if (!role) {
            throw new Error("Insira uma role.")
        }
        const id = generateId();

        const hash = new HashManager();
        const hashPassword = hash.create(password);

        await createUser(id, email, hashPassword);
        const token = generateToken({ id, role });

        res.status(200).send({ token });
    } catch (err: any) {
        res.status(res.statusCode).send({ message: err.sqlMessage || err.message })
    }
} 