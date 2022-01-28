// Exercício 1:
import express from "express";
import cors from "cors";
import { users } from "./data/users";
import { posts } from "./data/posts";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando com sucesso! (Porta: 3003)");
})

app.get("/", (req, res) => {
    console.log("Endpoint enviado.");
    res.status(200).send("Olá, API ativa! =)");
})

// Exercício 4:
app.get("/users", (req, res) => {
    console.log("Endpoint /users enviado!");
    res.status(200).send(users);
})

// Exercício 7:
app.get("/posts", ((req, res) => {
    console.log("Endpoint /posts enviado!");
    res.status(200).send(posts);
}))

// Exercicio 8:
app.get("/posts/:userId", ((req, res) => {
    const userId = Number(req.params.userId);
    const searchUser = users.filter((user) => { return user.userId === userId; });
    if (searchUser.length === 0) {
        res.status(400).send("ID não encontrado, insira um ID válido.")
    } else {
        const filterPosts = posts.filter((post) => {
            if (post.userId === userId) { return post; }
        })
        res.status(200).send(filterPosts);
    }
}))

// Exercício 9:
app.delete("/post/:postId", (req, res) => {
    const postId = Number(req.params.postId);
    const searchId = posts.filter((post) => { return post.userId == postId; });
    if (searchId.length === 0) {
        res.status(400).send("Post não encontrado, insira um ID válido.");
    } else {
        const indexPost = posts.findIndex((post) => post.postId === postId);
        posts.splice(indexPost, 1);
        res.status(200).send(posts);
    }
})

// Exercício 10:
app.delete("/users/:userId", (req, res) => {
    const userId = Number(req.params.userId);
    const searchPost = posts.filter((post) => { return post.userId == userId; });
    if (searchPost.length === 0) {
        res.status(400).send("Post não encontrado, insira um ID válido.");
    } else {
        const indexUser = users.findIndex((user) => user.userId === userId);
        users.splice(indexUser, 1);
        res.status(200).send(users);
    }
})