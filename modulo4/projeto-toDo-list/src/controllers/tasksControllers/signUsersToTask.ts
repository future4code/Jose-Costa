import { Request, Response } from "express";
import connection from "../../connection";
import { Task } from "../../models/Tasks";

export const signUsersToTask = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const task_id = req.body.task_id;
        const users_id = req.body.responsible_user_ids;
        if (!task_id || !Array.isArray(users_id) || typeof task_id !== "string" || users_id.length <= 0) {
            errorCode = 422;
            throw new Error("Erro: Parâmetros insuficientes.")
        }
        const checkExistences = await connection("Users").select().whereIn("user_id", users_id);
        if (checkExistences.length !== users_id.length) {
            errorCode = 409;
            throw new Error(`Erro: ID '${checkExistences[0].user_id}' não está cadastrado.`)
        }
        const taskExists = await Task.checkExistence({ task_id })
        if (!taskExists) {
            errorCode = 400;
            throw new Error("Erro: ID da tarefa não cadastrado.")
        }
        const responsibleExists = await connection("TasksAndResponsible").select().whereIn("user_id", users_id).andWhere("task_id", `${task_id}`);
        if (responsibleExists.length > 0) {
            errorCode = 400;
            throw new Error(`Erro: ID '${responsibleExists[0].user_id}' já está atribuído nessa tarefa.`)
        }

        const result = await Task.insertUsersToTask(task_id, users_id);
        
        res.status(200).send({ message: result });
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}