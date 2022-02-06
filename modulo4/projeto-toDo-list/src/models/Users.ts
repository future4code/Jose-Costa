import connection from "../connection";
import * as Type from "../types/Type";

export const User = {
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
}