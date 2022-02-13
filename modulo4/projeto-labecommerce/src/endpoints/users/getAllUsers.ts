import { Request, Response } from "express";
import connection from "../../data/connection";

export const getAllUsers = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const result = await connection("labecommerce_users").select();

        const allUsers = await Promise.all(result.map(async (user) => {
            const purchases = await connection("labecommerce_purchases").select("product_id", "quantity", "total_price").where({ user_id: user.id });
            return { ...user, purchases }
        }));

        res.status(200).send(allUsers);

    } catch (err) {
        if (err instanceof Error) {
            res.status(errorCode).send({ message: err.message })
        }
    }
}