import { Request, Response } from "express";
import { getUserById } from "../data/connection";
import { getData } from "../services/tokenGenerator";

export const profile = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const token = req.headers.authorization as string;

        console.log(token)
        const authentication = getData(token);

        const user = await getUserById(authentication.id);
    
        res.status(200).send({
          id: user.id,
          email: user.email,
        });

    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}