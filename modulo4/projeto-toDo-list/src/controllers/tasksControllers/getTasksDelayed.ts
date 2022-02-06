import { Request, Response } from "express";
import connection from "../../connection";
import { Task } from "../../models/Tasks";

export const getTasksDelayed = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const result = await connection.raw(`
            SELECT * FROM Tasks WHERE DATEDIFF(CURDATE(),Tasks.limitDate) > 0;
        `)
        const newResult = await Task.toLocaleDate(result[0]);
        res.status(200).send(newResult);
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message });
    }
}