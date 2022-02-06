import { Request, Response } from "express";
import connection from "../../connection";

export const searchTask = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const query = req.query.query;
        if (!query || typeof query !== "string") {
            errorCode = 422;
            throw new Error("Erro: Parâmetros insuficientes.")
        }
        const result = await connection("Tasks").select().whereILike("title", `%${query}%`).orWhere("description", "LIKE", `%${query}%`);

        const newResult = result.map((task: any) => {
            task.limitDate = new Date(task.limitDate).toLocaleDateString();
            task.creationDate = new Date(task.creationDate).toLocaleDateString();
            return task;
        });

          if (newResult.length > 0) { res.status(200).send({ tasks: result }); }
        else { res.status(200).send(result); }
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message });
    }
}