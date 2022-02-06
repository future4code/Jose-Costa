import { Request, Response } from "express";
import connection from "../../connection";
import { Task } from "../../models/Tasks";

export const updateTaskStatus = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const task_ids: string[] = req.body.task_ids;
        const status = req.body.status;
        if (!Array.isArray(task_ids) || task_ids.length <= 0) {
            errorCode = 422;
            throw new Error("Erro: Parâmetros insuficientes.");
        }
        const checkExistences = await connection("Tasks").select().whereIn("task_id", task_ids);
        if (checkExistences.length !== task_ids.length) {
            errorCode = 409;
            throw new Error(`Erro: Alguma tarefa não está cadastrada.`)
        }
        if (status !== "to do" && status !== "doing" && status !== "done") {
            errorCode = 422;
            throw new Error("Erro: Insira um status válido ('to do', 'doing' ou 'done').");
        }

        const result = await Task.updateTaskStatus(task_ids, status);
        
        res.status(200).send(result);
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}
