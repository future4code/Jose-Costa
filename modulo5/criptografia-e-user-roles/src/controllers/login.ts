import { Request, Response } from "express";
import { getUserByEmail } from "../data/connection";
import { HashManager } from "../services/HashManager";
import { generateToken } from "../services/tokenGenerator";

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !email.includes("@")) {
            throw new Error("Insira um e-mail válido");
        }
        if (!password || password.length < 6) {
            throw new Error("Insira um password válido. Mínimo de caracteres: 6");
        }

        const user = await getUserByEmail(email);

        const hash = new HashManager();
        const compareResult = await hash.compare(password, user.password);

        if (!compareResult) {
            throw new Error("Senha inválida.");
        }

        const token = generateToken({ id: user.id, role: user.role });
        res.status(200).send({ token });
    } catch (err: any) {
        res.status(res.statusCode).send({ message: err.sqlMessage || err.message })
    }
} 