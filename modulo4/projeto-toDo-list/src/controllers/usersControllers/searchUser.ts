import { Request, Response } from "express";
import connection from "../../connection";

export const searchUser = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const query = req.query.query;
        if (!query || typeof query !== "string") {
            errorCode = 422;
            throw new Error("Erro: Parâmetros insuficientes.")
        }

        const result = await connection("Users").select().whereILike("email", `%${query}%`).orWhere("name", "LIKE", `%${query}%`);

        res.status(200).send(result);
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message });
    }
}