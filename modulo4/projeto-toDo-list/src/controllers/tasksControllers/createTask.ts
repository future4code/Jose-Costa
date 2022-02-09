import { Request, Response } from "express";
import connection from "../../connection";
import { Task } from "../../models/Tasks";
import { User } from "../../models/Users";
import validator from "validator";
import * as Type from "../../types/Type";
const { randomUUID } = require('crypto');

export const createTask = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        let { title, description, limitDate, creatorUserId } = req.body;
        const user_id = creatorUserId;
        if (!title || !description || !limitDate || !creatorUserId) {
            errorCode = 422;
            throw new Error("Erro: Parâmetros insuficientes.")
        }
        if (typeof title !== "string" || typeof description !== "string") {
            errorCode = 422;
            throw new Error("Erro: parâmetros inválidos.");
        }
        if (await User.checkExistence({ user_id }) === false) {
            errorCode = 409;
            throw new Error("Erro: ID de usuário não cadastrado.")
        }
        limitDate = Task.transformDate(limitDate);
        if (!validator.isDate(limitDate) || validator.isBefore(limitDate)) {
            errorCode = 422;
            throw new Error("Erro: Insira uma data válida e futura. (formato: DD-MM-AAAA)")
        }

        const newTask: Type.Task = {
            task_id: randomUUID(),
            title,
            description,
            limitDate: new Date(limitDate),
            creationDate: new Date(),
            status: "to do",
            creatorUserId: user_id
        }
        
        await connection("Tasks").insert(newTask);
        res.status(200).send({ message: "Tarefa criada com sucesso." });
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}