import { IdGenerator } from "../services/idGenerator";

export enum USER_ROLES {
    NORMAL = "normal",
    ADMIN = "admin",
}

export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private createdAt: Date | string,
        private user_id: string,
    ) {
        if (!id) {
            this.id = IdGenerator.execute();
        }

        if (!createdAt) {
            this.createdAt = new Date();
        }

        if (createdAt) {
            this.createdAt = new Date(createdAt).toLocaleDateString();
        }
    }

    getId(): string {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getDescription(): string {
        return this.description;
    }

    getCreatedAt(): Date | string {
        return this.createdAt;
    }

    static toModel(data: any) {
        return new Recipe(data.id, data.title, data.description, data.createdAt, data.user_id);
    }
}

