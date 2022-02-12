import { Request, Response } from "express";
import connection from "../../data/connection";
import { Users } from "../../services/Users";

export const getAllUsers = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const result = await connection("labecommerce_users").select();
        const allUsers = result.map(Users.to);

        res.status(200).send(allUsers);
        
    } catch (err) {
        if (err instanceof Error) {
            res.status(errorCode).send({ message: err.message })
        }
    }
}