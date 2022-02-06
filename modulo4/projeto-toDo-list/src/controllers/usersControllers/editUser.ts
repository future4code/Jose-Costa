import { Request, Response } from "express";
import connection from "../../connection";
import { User } from "../../models/Users";
import * as Type from "../../types/Type";

export const editUser = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const user_id = req.params.id;
        const { name, nickname } = req.body;
        if (!name && !nickname) {
            errorCode = 422;
            throw new Error("Erro: insira um ou mais parâmetro(s).");
        } if (name && typeof name !== "string" || nickname && typeof nickname !== "string") {
            errorCode = 422;
            throw new Error("Erro: parâmetros inválidos.");
        }
        const idExists = await User.checkExistence({ user_id });
        if (!idExists) {
            errorCode = 400;
            throw new Error("Erro: ID não cadastrado.")
        }
        
        let newData: undefined | Type.Edit;
        name && nickname ? newData = { name, nickname } : "";
        !name && nickname ? newData = { nickname } : "";
        name && !nickname ? newData = { name } : "";

        await connection("Users").update(newData).where({ user_id });

        res.status(200).send(newData);
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message });
    }
}