import { Request, Response } from "express";
import connection from "../../connection";
import { Task } from "../../models/Tasks";

export const getTasksByStatus = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const status = req.query.status;
        if (!status || typeof status !== "string") {
            errorCode = 422;
            throw new Error("Erro: Parâmetros insuficientes.");
        }
        if (status !== "to do" && status !== "doing" && status !== "done") {
            errorCode = 422;
            throw new Error("Erro: Insira um status válido ('to do', 'doing' ou 'done').");
        }

        const result = await connection("Tasks").select().where({ status });
        const newResult = await Task.toLocaleDate(result);

        res.status(200).send(newResult);
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message });
    }
}