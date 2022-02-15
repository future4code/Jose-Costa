import { Request, Response } from "express";
import connection from "../../data/connection";
import { Users } from "../../services/Users";

const { randomUUID } = require("crypto");

export const createUser = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            errorCode = 422;
            throw new Error("Parâmetros insuficientes.");
        } 
        if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
            errorCode = 422;
            throw new Error("Os campos precisam ser strings.");
        }
        const emailAlreadyExists = await Users.check({ email});
        if (emailAlreadyExists.length > 0) {
            errorCode = 409;
            throw new Error("E-mail já cadastrado.");
        }

        await connection("labecommerce_users").insert({
            id: randomUUID(),
            name,
            email,
            password
        });
        res.status(201).end();
        
    } catch (err) {
        if (err instanceof Error) {
            res.status(errorCode).send({ message: err.message })
        }
    }
}