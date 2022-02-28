import { User } from "../entitities/User";

export interface IUserRepository {
    find(dataColumn: string, whereColumn: string): Promise<User[]>;
    create(user: User): Promise<void>;
}