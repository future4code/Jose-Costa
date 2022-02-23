import * as bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export class HashManager {
    async create(s: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST); 
        const salt = await bcrypt.genSalt(rounds);
        const result = await bcrypt.hash(s, salt);
        return result;
    }

    async compare(s: string, hash: string): Promise<boolean> {
        return bcrypt.compareSync(s, hash);
    }
}