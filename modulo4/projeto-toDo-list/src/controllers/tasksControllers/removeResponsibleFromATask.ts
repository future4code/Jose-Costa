import { Request, Response } from "express";
import connection from "../../connection";
import { Task } from "../../models/Tasks";
import { User } from "../../models/Users";

export const removeResponsibleFromATask = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const task_id = req.params.taskId;
        const user_id = req.params.responsibleUserId;
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
        if (!responsibleExists) {
            errorCode = 400;
            throw new Error("Erro: Usuário não está atribuído a essa tarefa.")
        }

        await connection("TasksAndResponsible").del().where({ task_id }).andWhere({ user_id });
        
        res.status(200).send({ message: "Usuário retirado da tarefa com sucesso." });
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}