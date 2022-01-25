// Documentação: https://documenter.getpostman.com/view/18387361/UVe9SpRe

import express, { Request, Response } from "express";
import cors from "cors";
// import { tasks } from "./data/tasks";
import tasks from "./data/tasks.json";
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3003, () => console.log("Servidor disponível em 3003"));

// Exercício 1:
app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("Pong");
});

// Exercício 4:
app.get("/tasks/:status", (req: Request, res: Response) => {
    const status = req.params.status;
    if (status !== "false" && status !== "true") {
        res.status(400).send("Insira um status válido: true ou false.")
    } else {
        const result = tasks.filter((task) => {
            if (status === "true" && task.completed === true) {
                return task;
            } else if (status === "false" && task.completed === false) {
                return task;
            }
        });
        res.status(200).send(result);
    }
});


// Exercício 5:
app.post("/tasks/add", (req, res) => {
    const body = req.body;
    const userId = Number(req.body.userId);
    if (!body.title || !body.userId || isNaN(userId)) {
        res.status(400).send("Necessário incluir um body contendo: 'userId' = number e 'title' = string.")
    } else {
        // const tasksRead = JSON.parse(fs.readFileSync('src/data/tasks.json'));
        tasks.push({
            userId: Number(body.userId),
            id: tasks.length + 1,
            title: body.title,
            completed: false,
        });
        fs.writeFileSync('src/data/tasks.json', JSON.stringify(tasks, null, '\t'));
        res.status(200).send(tasks);
    }
});

// Exercício 6:
app.put("/tasks/edit", (req, res) => {
    const body = {
        userId: Number(req.body.userId),
        id: Number(req.body.id)
    }
    if (isNaN(body.id) || isNaN(body.userId)) {
        res.status(400).send("Necessário incluir um body contendo: 'userId' = number e 'id' = number.")
    } else {
        const result = tasks.filter((task) => {
            if (task.id === body.id && task.userId === body.userId) {
                task.completed = !task.completed;
                return task;
            }
        });
        result.length === 0 ? res.status(400).send("Nenhuma tarefa encontrada.") : res.status(200).send(tasks);
    }
});

// Exercício 7:
app.delete("/tasks/", (req, res) => {
    const body = { id: Number(req.body.id) }
    const searchTask = tasks.filter((task) => {
        return task.id === body.id;
    });
    if (searchTask.length === 0) {
        res.status(400).send("Tarefa não encontrada. Insira um id de tarefa válido no body.");
    } else {
        const indexTask = tasks.findIndex((task) => task.id === body.id);
        tasks.splice(indexTask, 1);
        res.status(200).send(tasks);
    }
});

// Exercício 8:
app.get("/tasks", (req, res) => {
    const userId = Number(req.query.userId);
    let selectedUser = [];
    let others = [];

    for (let i = 0; i < tasks.length; i++) {
        if (userId === tasks[i].userId) {
            selectedUser.push(tasks[i]);
        } else {
            others.push(tasks[i]);
        }
    }
    const result = {
        todos: [
            { selectedUser },
            { others }
        ]
    }

    if (selectedUser.length === 0) {
        res.status(400).send("Usuário não encontrado.");
    } else {
        res.status(200).send(result);

    }
});

