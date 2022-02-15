import connection from "../data/connection"
import { Params } from "../types"
import { ProductsT } from "../types";

export const Products = {
    to: (result: any): ProductsT => {
        return {
            id: result.id,
            name: result.name,
            price: result.price,
            image_url: result.image_url
        }
    },

    check: async (object: Params): Promise<any> => {
        const response = await connection("labecommerce_products").select().where(object);
        return response.map(Products.to);
    },
}