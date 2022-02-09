import { Request, Response } from "express";
import connection from "../../connection";
import { Task } from "../../models/Tasks";

export const deleteTask = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const task_id = req.params.id;
        if (!task_id) {
            errorCode = 422;
            throw new Error("Erro: Parâmetros insuficientes.");
        }
        const taskExists = await Task.checkExistence({ task_id })
        if (!taskExists) {
            errorCode = 400;
            throw new Error("Erro: ID de tarefa não cadastrado.")
        }

        await connection("TasksAndResponsible").del().where({ task_id });
        await connection("Tasks").del().where({ task_id });
        
        res.status(200).send({ message: "Tarefa deletada com sucesso!" });
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}
