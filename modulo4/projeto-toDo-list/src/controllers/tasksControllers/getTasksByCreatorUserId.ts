import { Request, Response } from "express";
import connection from "../../connection";
import { User } from "../../models/Users";

export const getTasksByCreatorUserId = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const user_id = req.query.creatorUserId as string;
        const idExists = await User.checkExistence({ user_id });
        if (!user_id || !idExists) {
            errorCode = 400;
            throw new Error("Erro: ID não cadastrado.")
        }
        const result = await connection("Tasks").select(" Tasks.*", "Users.name").join("Users", "Tasks.creatorUserId", "=", "Users.user_id").where({ "Users.user_id": user_id}); 
       
        const newResult = result.map((task: any) => {
            task.limitDate = new Date(task.limitDate).toLocaleDateString();
            task.creationDate = new Date(task.creationDate).toLocaleDateString();
            return task;
        });

        res.status(200).send(newResult);
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message });
    }
}