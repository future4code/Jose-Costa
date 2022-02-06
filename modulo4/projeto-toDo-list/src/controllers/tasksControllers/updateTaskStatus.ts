import { Request, Response } from "express";
import connection from "../../connection";
import { Task } from "../../models/Tasks";

export const updateTaskStatus = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const task_id = req.params.id;
        const status = req.body.status;
        if (!task_id || !status || typeof task_id !== "string" || typeof status !== "string") {
            errorCode = 422;
            throw new Error("Erro: Parâmetros insuficientes.");
        }
        const taskExists = await Task.checkExistence({ task_id })
        if (!taskExists) {
            errorCode = 400;
            throw new Error("Erro: ID de tarefa não cadastrado.")
        }
        if (status !== "to do" && status !== "doing" && status !== "done") {
            errorCode = 422;
            throw new Error("Erro: Insira um status válido ('to do', 'doing' ou 'done').");
        }
        await connection("Tasks").update({ status }).where({ task_id });
        res.status(200).send({ message: "Status atualizado com sucesso!"});
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}
