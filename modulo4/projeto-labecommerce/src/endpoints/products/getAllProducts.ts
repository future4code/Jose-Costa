import { Request, Response } from "express";
import connection from "../../data/connection";
import { Products } from "../../services/Products";

export const getAllProducts = async (req: Request, res: Response) => {
    let errorCode: number = 500;
    try {
        const { order, search } = req.query;

        if (order && (order !== "asc" && order !== "desc")) {
            errorCode = 422;
            throw new Error("Escolhe entre 'asc' ou 'desc'.");
        }
        const searchTerm = search || "";

        const result = await connection("labecommerce_products")
        .select()
        .where("name", "like", `%${searchTerm}%`)
        .orderBy("name", order);
        
        const allProducts = result.map(Products.to);
        
        res.status(200).send(allProducts);
        
    } catch (err) {
        if (err instanceof Error) {
            res.status(errorCode).send({ message: err.message })
        }
    }
}