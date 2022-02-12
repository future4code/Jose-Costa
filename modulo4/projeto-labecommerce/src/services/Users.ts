import connection from "../data/connection"
import { Params, UsersT } from "../types"

export const Users = {
    to: (result: any): UsersT => {
        return {
            id: result.id,
            name: result.name,
            email: result.email,
            password: result.password
        }
    },

    check: async (object: Params): Promise<any> => {
        const response = await connection("labecommerce_users").select().where(object);
        return response.map(Users.to);
    },

}