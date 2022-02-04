import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import cors from "cors";
import connection from "./connection";
import { getUserController } from "./controllers/userController";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/user", getUserController);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha na conexão do servidor.`);
  }
});