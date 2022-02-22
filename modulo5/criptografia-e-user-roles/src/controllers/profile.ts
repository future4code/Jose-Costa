import { Request, Response } from "express";
import { getUserById } from "../data/connection";
import { getData } from "../services/tokenGenerator";

export const profile = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;

        const authentication = getData(token);

        if (authentication.role !== "normal") {
            throw new Error("Unauthorized ");
        }

        const user = await getUserById(authentication.id);

        res.status(200).send({
          id: user.id,
          email: user.email,
          role: user.role,
        });

    } catch (err: any) {
        res.status(res.statusCode).send({ message: err.sqlMessage || err.message })
    }
} 