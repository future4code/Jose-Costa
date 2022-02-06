import { Request, Response } from "express";
import connection from "../../connection";
import { Task } from "../../models/Tasks";

export const getUsersResponsibleForTask = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const task_id = req.params.id;
        if (!task_id || typeof task_id !== "string") {
            errorCode = 422;
            throw new Error("Erro: Parâmetros insuficientes.")
        }
        const taskExists = await Task.checkExistence({ task_id })
        if (!taskExists) {
            errorCode = 400;
            throw new Error("Erro: ID da tarefa não cadastrado.")
        }

        const result = await connection("TasksAndResponsible").select("TasksAndResponsible.user_id", "Users.nickname").whereLike("task_id", task_id).join("Users", "Users.user_id", "=", "TasksAndResponsible.user_id");
        
        if (result.length === 0) { res.status(200).send({ message: "Nenhuma pessoa atribuída a essa tarefa." }); }
        else { res.status(200).send(result); }

    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}