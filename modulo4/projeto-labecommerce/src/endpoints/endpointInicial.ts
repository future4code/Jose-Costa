import { Request, Response } from "express";
import connection from "../data/connection";

export const endpointInicial = (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        res.status(200).send("Olá mundo");
    } catch (err: any) {
        res.status(errorCode).send({ message: err.sqlMessage || err.message })
    }
}