import { Request, Response } from "express";
import connection from "../../data/connection";
import { Purchases } from "../../services/Purchase";
import { Users } from "../../services/Users";

export const getUserPurchases = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const user_id = req.params.user_id;
        if (!user_id || typeof user_id !== "string") {
            errorCode = 422;
            throw new Error("Parâmetro insuficiente ou verique o formato.");
        }
        const userExists = await Users.check({ id: user_id });
        if (userExists.length === 0 ) {
            errorCode = 409;
            throw new Error("Usuário inexistente.");
        }

        const result = await connection("labecommerce_purchases").select().where({ user_id })
        const allPurchases = result.map(Purchases.to);

        res.status(200).send(allPurchases);
        
    } catch (err) {
        if (err instanceof Error) {
            res.status(errorCode).send({ message: err.message })
        }
    }
}