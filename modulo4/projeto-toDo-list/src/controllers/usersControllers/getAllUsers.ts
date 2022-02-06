import { Request, Response } from "express";
import connection from "../../connection";

export const getAllUsers = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {

        const result = await connection("Users").select();
        
        res.status(200).send(result);
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}
