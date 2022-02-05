import connection from "../connection";
import * as Type from "../types/Type";

export const User = {
    create: async (newUser: Type.User): Promise<any> => {
        try {
            await connection("Users").insert(newUser);
            return "Conta criada com sucesso.";
        } catch (err: any) {
            return err.message;
        }
    },

    checkExistence: async (params: Type.Check): Promise<any> => {
        try {
            const result = await connection("Users").select().where(params);
            if (result.length === 0) { return false; }
            else {
                return true;
            }
        } catch (err: any) {
            return err.message;
        }
    },

    get: async (user_id: Type.Check): Promise<any> => {
        const result = await connection("Users").select().where(user_id);
        return result[0];
    },

    edit: async (params: Type.Edit | undefined, user_id: Type.Check): Promise<any> => {
        const result = await connection("Users").update(params).where(user_id);
        return result;
    }
}