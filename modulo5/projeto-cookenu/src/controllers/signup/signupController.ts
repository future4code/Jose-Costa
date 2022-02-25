import { Request, Response } from "express";
import { CustomError } from "../../services/CustomError";
import { SignupUseCase } from "./signupUseCase";

export class SignupController {
    constructor(private SignupUseCase: SignupUseCase) { }

    async execute(req: Request, res: Response): Promise<void> {
        try {
            res.status(200).send("ok")
        } catch (err) {
            if (err instanceof CustomError) {
                res.status(err.statusCode).send(err.message);
            }
        }
    }
}