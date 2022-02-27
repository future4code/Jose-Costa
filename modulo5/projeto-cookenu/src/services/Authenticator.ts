import { JwtPayload, sign, verify } from "jsonwebtoken"
import { AuthenticationData } from "../types/AuthenticationData"
import dotenv from 'dotenv'

dotenv.config()

export class Authenticator {
    static generateToken = (payload: AuthenticationData) => {
        try {
        console.log(payload)
        const token = sign(payload, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_EXPIRES_IN });
        console.log(token)
        return token;
        } catch (err: any) {
            console.log(err.message)
        }
    }

    static getTokenData = (token: string) => {
        const tokenData = verify(token, process.env.JWT_SECRET as string) as JwtPayload
        return { id: tokenData.id }
    }
}


Authenticator.generateToken