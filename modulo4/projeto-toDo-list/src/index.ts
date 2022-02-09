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
import { signUsersToTask } from "./controllers/tasksControllers/signUsersToTask";
import { getUsersResponsibleForTask } from "./controllers/tasksControllers/getUsersResponsibleForTask";
import { updateTaskStatus } from "./controllers/tasksControllers/updateTaskStatus";
import { getTasksByStatus } from "./controllers/tasksControllers/getTasksByStatus";
import { getTasksDelayed } from "./controllers/tasksControllers/getTasksDelayed";
import { removeResponsibleFromATask } from "./controllers/tasksControllers/removeResponsibleFromATask";
import { searchTask } from "./controllers/tasksControllers/searchTask";
import { deleteTask } from "./controllers/tasksControllers/deleteTask";
import { deleteUser } from "./controllers/usersControllers/deleteUser";
const app = express();

app.use(cors());
app.use(express.json());

// Users:
app.post("/user", createUser);

app.get("/user", searchUser);
app.get("/user/all", getAllUsers);
app.get("/user/:id", getUser);

app.put("/user/edit/:id", editUser);

app.delete("/user/:id", deleteUser);

// Tasks:
app.post("/task", createTask);

// Router:
const getRouter = (req: Request, res: Response) => {
  if (req.query.query) {
    searchTask(req, res);
  } if (req.query.status) {
    getTasksByStatus(req, res);
  } if (req.query.creatorUserId) {
    getTasksByCreatorUserId(req, res);
  }
}

app.get("/task/", getRouter);
app.get("/task/", getRouter);
app.get("/task/", getRouter);

app.get("/task/delayed", getTasksDelayed);
app.get("/task/:id/responsible", getUsersResponsibleForTask);
app.get("/task/:id", getTask);

app.post("/task/responsible", signUsersToTask);

app.put("/task/status/:id/", updateTaskStatus);

app.delete("/task/:taskId/responsible/:responsibleUserId", removeResponsibleFromATask);
app.delete("/task/:id", deleteTask);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha na conexão do servidor.`);
  }
});