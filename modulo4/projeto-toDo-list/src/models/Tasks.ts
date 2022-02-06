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
    }

}
