import connection from "../connection";
import * as Type from "../types/Type";

export const Task = {
    create: async (newTask: Type.Task): Promise<any> => {
        try {
            await connection("Tasks").insert(newTask);
            return "Tarefa criada com sucesso.";
        } catch (err: any) {
            return err.message;
        }
    },
    transformDate: (date: string): string => {
        let newDate: string[] | string = date.split("/");
        newDate = `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
        return newDate;
    }
}
