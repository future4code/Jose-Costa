import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { createUser } from "./controllers/usersControllers/createUser";
import { getUser } from "./controllers/usersControllers/getUser";
import { editUser } from "./controllers/usersControllers/editUser";
import { createTask } from "./controllers/tasksControllers/createTask";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/user", createUser);
app.get("/user/:id", getUser);
app.put("/user/edit/:id", editUser);
app.post("/task", createTask);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha na conexão do servidor.`);
  }
});