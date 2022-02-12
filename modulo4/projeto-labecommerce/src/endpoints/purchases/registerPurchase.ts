import { Request, Response } from "express";
import connection from "../../data/connection";
import { Users } from "../../services/Users";
import { Products } from "../../services/Products";

const { randomUUID } = require("crypto");

export const registerPurchase = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const { user_id, product_id, quantity } = req.body;
        if (!user_id || !product_id || !quantity) {
            errorCode = 422;
            throw new Error("Parâmetros insuficientes.");
        }
        if (typeof user_id !== "string" || isNaN(Number(quantity)) || Number(quantity) < 1 || typeof product_id !== "string") {
            errorCode = 422;
            throw new Error("Verifique se os campos foram preenchidos corretamente");
        }
        const productExists = await Products.check({ id: product_id });
        const userExists = await Users.check({ id: user_id });
        if (userExists.length === 0 || productExists.length === 0) {
            errorCode = 409;
            throw new Error("Usuário ou produto inexistente.");
        }

        const price = productExists[0].price;
        const total_price = price * quantity;

        await connection("labecommerce_purchases").insert({
            id: randomUUID(),
            user_id: user_id,
            product_id: product_id,
            quantity: quantity,
            total_price: total_price
        });

        res.status(201).end();

    } catch (err) {
        if (err instanceof Error) {
            res.status(errorCode).send({ message: err.message });
        }
    }
}