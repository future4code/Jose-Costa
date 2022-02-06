import { Request, Response } from "express";
import connection from "../../connection";
import { Task } from "../../models/Tasks";

export const getTask = async (req: Request, res: Response) => {
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
        
        let result = await connection("Tasks").select().where({ task_id });
        const resultResponsible = await connection("TasksAndResponsible").
            select("TasksAndResponsible.user_id", "Users.nickname").
            whereLike("task_id", task_id).
            join("Users", "Users.user_id", "=", "TasksAndResponsible.user_id");
        const { taskId, title, description, limitDate, creationDate, status, creatorUserId } = result[0];

        res.status(200).send({
            task_id, title, description,
            limiteDate: new Date(limitDate).toLocaleDateString(),
            creationDate: new Date(creationDate).toLocaleDateString(),
            status, creatorUserId,
            responsibleUsers: resultResponsible
        });
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}
