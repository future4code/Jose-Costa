import { SignupController } from "./signupController";
import { SignupUseCase } from "./signupUseCase";

const signupUseCase = new SignupUseCase();
export const signupController = new SignupController(signupUseCase);