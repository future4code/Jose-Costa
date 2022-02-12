import connection from "../data/connection";
import { Params } from "../types";
import { PurchaseT } from "../types";

export const Purchases = {
    to: (result: any): PurchaseT => {
        return {
            id: result.id,
            user_id: result.user_id,
            product_id: result.product_id,
            quantity: result.quantity,
            total_price: result.total_price
        }
    },

    check: async (object: Params): Promise<any> => {
        const response = await connection("labecommerce_purchases").select().where(object);
        return response.map(Purchases.to);
    },
}