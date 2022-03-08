import * as bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export class HashManager {
    create(s: string): string {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = bcrypt.genSaltSync(rounds);
        const result = bcrypt.hashSync(s, salt);
        return result;
    }

    async compare(s: string, hash: string): Promise<boolean> {
        return bcrypt.compareSync(s, hash);
    }
}

