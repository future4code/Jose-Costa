import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { AuthenticationData } from "../types";

dotenv.config();

const expiresIn = "1min";

export const generateToken = (infos: AuthenticationData): string => {
  const token = jwt.sign({ id: infos.id, role: infos.role }, process.env.JWT_KEY as string, { expiresIn });
  return token;
}

export const getData = (token: string) => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
    role: payload.role
  };
  return result;
}; 