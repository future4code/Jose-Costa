import { JwtPayload, sign, verify } from "jsonwebtoken";
import { AuthenticationData } from "../types/AuthenticationData"
import dotenv from "dotenv";
import { CustomError } from "./CustomError";

dotenv.config();

export class Authenticator {
    static generateToken = (payload: AuthenticationData) => {
        try {
            const token = sign(payload, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRES_IN });
            return token;
        } catch (err: any) {
            console.log(err.message)
        }
    }

    static getTokenData = (token: string) => {
        try {
            const tokenData = verify(token, process.env.JWT_SECRET as string) as JwtPayload;
            return { id: tokenData.id };
        } catch (err) {
            throw new CustomError(401, "Acesso negado.");
        }
    }
}


Authenticator.generateToken