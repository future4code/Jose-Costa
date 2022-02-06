import { Request, Response } from "express";
import connection from "../../connection";
import { Task } from "../../models/Tasks";
import { User } from "../../models/Users";

export const signUserToTask = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const task_id = req.body.task_id;
        const user_id = req.body.responsible_user_id;
        if (!task_id || !user_id || typeof task_id !== "string" || typeof user_id !== "string") {
            errorCode = 422;
            throw new Error("Erro: Parâmetros insuficientes.")
        }
        if (await User.checkExistence({ user_id }) === false) {
            errorCode = 409;
            throw new Error("Erro: ID de usuário não cadastrado.")
        }
        const taskExists = await Task.checkExistence({ task_id })
        if (!taskExists) {
            errorCode = 400;
            throw new Error("Erro: ID da tarefa não cadastrado.")
        }
        const responsibleExists = await Task.checkResponsible(task_id, user_id);
        if (responsibleExists) {
            errorCode = 400;
            throw new Error("Erro: Usuário já está atribuído nessa tarefa.")
        }
        await connection("TasksAndResponsible").insert({ task_id, user_id });
        res.status(200).send({ message: "Tarefa atribuída com sucesso!" });
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}