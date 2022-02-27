import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";

export enum USER_ROLES {
    NORMAL = "normal",
    ADMIN = "admin",
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
    ) { 
        if (!id) {
            this.id = IdGenerator.execute();
        }
    }
   
    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getPassword(): string {
        return this.password;
    }

    toUserModel(data: any) {
        return new User(data.id, data.name, data.email, data.password);
    }
}
