import express, { Request, Response } from "express";
import cors from "cors";
import data from "./data/data.json";
import { errors } from "./data/errors";
import { generateId, checkProductName, checkProductId, checkPrice } from "./constants";

const fs = require("fs");
const app = express();

app.use(cors());
app.use(express.json());
app.listen(3003, () => console.log("Servidor disponível em http://localhost:3003/"));

// Exercício 1:
app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Status do servidor: online. ;)")
})

// Exercício 3:
app.post("/products/add", (req: Request, res: Response) => {
    try {
        const body = req.body;
        if (!body.name || !body.price) {
            throw new Error("422");
        }
        if (checkProductName(body.name)) {
            throw new Error("409");
        }
        if (checkPrice(Number(body.price))) {
            throw new Error("422");
        }
        data.push({
            id: generateId(),
            name: body.name,
            price: body.price
        });
        fs.writeFileSync('src/data/data.json', JSON.stringify(data, null, '\t'));
        res.status(200).send(data);
    } catch (err: any) {
        res.status(errors[err.message || "default"].statusCode).send(errors[err.message || "default"].msg);
    }
});

// Exercício 4:
app.get("/products", (req: Request, res: Response) => {
    try {
        const querySearch = req.query.name?.toString();
        if (querySearch) {
            const searchProducts = data.filter((product) => {
                return product.name.toLowerCase().includes(querySearch.toLowerCase());
            })
            res.status(200).send(searchProducts);
        } else {
            res.status(200).send(data);
        }
    } catch (err) {
        res.status(errors["default"].statusCode).send(errors["default"].msg);
    }
});

// Exercício 5:
app.put("/products/edit/:id", (req: Request, res: Response) => {
    try {
        const body = req.body;
        const productId = Number(req.params.id);
        if (!productId || (!body.name && !body.price)) {
            throw new Error("400");
        }
        if (!checkProductId(productId)) {
            throw new Error("422");
        }
        if (body.name || body.price) {
            const newPrice = body.price && Number(body.price);
            const newName = body.name && body.name;

            if (body.price && checkPrice(newPrice)) {
                throw new Error("422");
            } if (body.name && typeof body.name !== "string") {
                throw new Error("422");
            }
            else {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id === productId ) {
                        data[i].price = newPrice || data[i].price;
                        data[i].name = newName || data[i].name;
                    }
                }
                fs.writeFileSync('src/data/data.json', JSON.stringify(data, null, '\t'));
                res.status(200).send(data);
            }
        }
    } catch (err: any) {
        res.status(errors[err.message || "default"].statusCode).send(errors[err.message || "default"].msg);
    }
});

app.delete("/products/del/:id", (req: Request, res: Response) => {
    try {
        const productId = Number(req.params.id);
        if (!productId) {
            throw new Error("400");
        }
        if (!checkProductId(productId)) {
            throw new Error("422");
        }
        const indexProduct = data.findIndex((product) => product.id === productId);
        data.splice(indexProduct, 1);

        fs.writeFileSync('src/data/data.json', JSON.stringify(data, null, '\t'));
        res.status(200).send(data);
    } catch (err: any) {
        res.status(errors[err.message || "default"].statusCode).send(errors[err.message || "default"].msg);
    }
});