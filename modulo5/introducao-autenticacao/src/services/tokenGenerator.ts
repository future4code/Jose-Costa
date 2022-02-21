import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

export const generateToken = (id: string): string => {
  const token = jwt.sign({ id }, process.env.JWT_KEY as string, { expiresIn });
  return token;
}

export const getData = (token: string) => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};