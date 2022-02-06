import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { createUser } from "./controllers/usersControllers/createUser";
import { getUser } from "./controllers/usersControllers/getUser";
import { editUser } from "./controllers/usersControllers/editUser";
import { createTask } from "./controllers/tasksControllers/createTask";
import { getTask } from "./controllers/tasksControllers/getTask";
import { getAllUsers } from "./controllers/usersControllers/getAllUsers";
import { getTasksByCreatorUserId } from "./controllers/tasksControllers/getTasksByCreatorUserId";
import { searchUser } from "./controllers/usersControllers/searchUser";
import { signUserToTask } from "./controllers/tasksControllers/signUserToTask";
import { getUsersResponsibleForTask } from "./controllers/tasksControllers/getUsersResponsibleForTask";
import { updateTaskStatus } from "./controllers/tasksControllers/updateTaskStatus";
import { getTasksByStatus } from "./controllers/tasksControllers/getTasksByStatus";
import { getTasksDelayed } from "./controllers/tasksControllers/getTasksDelayed";
const app = express();

app.use(cors());
app.use(express.json());

app.post("/user", createUser);
app.get("/user", searchUser);
app.get("/user/all", getAllUsers);
app.get("/user/:id", getUser);
app.put("/user/edit/:id", editUser);
app.post("/task", createTask);
app.get("/task/delayed", getTasksDelayed);
app.get("/task/", getTasksByStatus);
app.get("/task/:id", getTask);
app.get("/task", getTasksByCreatorUserId);
app.post("/task/responsible", signUserToTask);
app.get("/task/:id/responsible", getUsersResponsibleForTask);
app.put("/task/status/:id/", updateTaskStatus);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha na conexão do servidor.`);
  }
});