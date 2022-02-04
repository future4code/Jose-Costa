import { application, Request, Response } from "express";
import connection from "../connection";

export const getUserController = async (req: Request, res: Response) =>{
    let errorCode: number = 500;
    try {
        const firstCommit = await connection.select().table("Actor");
        res.send(firstCommit);
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}