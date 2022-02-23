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
        private role: USER_ROLES
    ) { }

    // Criar os getters e setters;
    
    toUserModel(data: any) {
        return new User(data.id, data.name, data.email, data.password, data.role);
    }
}