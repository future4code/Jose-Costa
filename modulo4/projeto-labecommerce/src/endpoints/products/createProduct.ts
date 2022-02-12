import { Request, Response } from "express";
import connection from "../../data/connection";
import { Products } from "../../services/Products";

const { randomUUID } = require("crypto");

export const createProduct = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const { name, price, image_url } = req.body;
        if (!name || !price || !image_url) {
            errorCode = 422;
            throw new Error("Parâmetros insuficientes.");
        } 
        if (typeof name !== "string" || isNaN(Number(price)) || Number(price) < 0 || typeof image_url !== "string") {
            errorCode = 422;
            throw new Error("Verifique se os campos foram preenchidos corretamente");
        }
        const nameAlreadyExists = await Products.check({ name });
        if (nameAlreadyExists.length > 0) {
            errorCode = 409;
            throw new Error("Já existe um produto com esse nome.");
        }

        await connection("labecommerce_products").insert({
            id: randomUUID(),
            name,
            price,
            image_url
        });
        
        res.status(201).end();
    } catch (err) {
        if (err instanceof Error) {
            res.status(errorCode).send({ message: err.message })
        }
    }
}