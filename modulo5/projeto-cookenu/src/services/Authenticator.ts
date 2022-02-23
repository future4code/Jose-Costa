import { JwtPayload, sign, verify } from "jsonwebtoken"
import { AuthenticationData } from "../types/AuthenticationData"
import dotenv from 'dotenv'

dotenv.config()

export class Authenticator {
    static generateToken = (payload: AuthenticationData) => {
        const token = sign(payload, process.env.JWT_SECRET as string, { expiresIn: process.env.EXPIRES_IN });
        return token;
    }

    static getTokenData = (token: string) => {
        const tokenData = verify(token, process.env.JWT_SECRET as string,) as JwtPayload
        return { id: tokenData.id, role: tokenData.role }
    }
}


Authenticator.generateToken