import { Request, Response } from "express";
import connection from "../../connection";
import { User } from "../../models/Users";

export const getUser = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const user_id = req.params.id;
        if (!user_id) {
            errorCode = 422;
            throw new Error("Erro: Parâmetros insuficientes.");
        }
        const idExists = await User.checkExistence({ user_id })
        if (!idExists) {
            errorCode = 400;
            throw new Error("Erro: ID não cadastrado.")
        }

        const result = await connection("Users").select().where({ user_id });

        res.status(200).send({ user_id: result[0].user_id, nickname: result[0].nickname });
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}
