import connection from "../connection";
import * as Type from "../types/Type";

export const Task = {
    transformDate: (date: string): string => {
        let newDate: string[] | string = date.split("-");
        newDate = `${newDate[2]}/${newDate[1]}/${newDate[0]}`;
        return newDate;
    },

    checkExistence: async (params: Type.Check): Promise<any> => {
        try {
            const result = await connection("Tasks").select().where(params);
            if (result.length === 0) { return false; }
            else {
                return true;
            }
        } catch (err: any) {
            return err.message;
        }
    },

    checkResponsible: async (task_id: string, user_id: string): Promise<any> => {
        try {
            const result = await connection("TasksAndResponsible").select().whereLike("task_id", `${task_id}`).andWhere("user_id", "LIKE", `${user_id}`);
            if (result.length === 0) { return false; }
            else {
                return true;
            }
        } catch (err: any) {
            return err.message;
        }
    },

    toLocaleDate: async (tasks: Type.Task[]): Promise<any> => {
        const result = tasks.map((task) => {
            task.limitDate = new Date(task.limitDate).toLocaleDateString();
            task.creationDate = new Date(task.creationDate).toLocaleDateString();
            return task;
        });
        return result;
    },

    insertUsersToTask: async (task_id: string, users_id: string[]): Promise<any> => {
        try {
            for (let i = 0; i < users_id.length; i++) {
                await connection("TasksAndResponsible").insert({ task_id, user_id: users_id[i] });
            }
            return "Operação realizada com sucesso!"
        } catch (err: any) {
            return err.message;
        }
    },

    updateTaskStatus: async (task_ids: string[], status: string): Promise<any> => {
        try {
            for (let i = 0; i < task_ids.length; i++) {
                await connection("Tasks").update({ status } ).where({ task_id: task_ids[i] });
            }
            return "Status atualizado(s) com sucesso!"
        } catch (err: any) {
            return err.message;
        }
    },

}
