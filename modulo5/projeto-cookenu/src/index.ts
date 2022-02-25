import { Request, Response } from "express";
import { app } from "./app";
import { signupController } from "./controllers/signup";

app.get("/ping", (req: Request, res: Response) => { res.send("pong"); });

app.post("/signup", (req: Request, res: Response) => { signupController.execute(req, res); });