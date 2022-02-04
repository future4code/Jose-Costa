import express, { Request, Response } from "express";
import connection from "./connection";
import { AddressInfo } from "net";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Server:
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha na conexão do servidor.`);
  }
});

// Exercício 1 - A: Recebemos a resposta dentro de um array de objetos, por isso utilizamos duas vezes o [0] para ter acesso apenas ao objeto do resultado solicitado.

// Exercício 1 - B:
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result[0][0];
}

app.get("/users", async (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;
    const result = await getActorByName(name);
    res.status(200).send(result);
  } catch (err: any) {
    res.status(500).send(err.sqlMessage || err.message)
  }
})

// Exercício 1 - C:
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`SELECT COUNT(*) as count FROM Actor WHERE gender = ${gender}`);
  return result[0][0].count;
}

// countActors("female").then((res) => { console.log(res) })

// Exercício 2 - A:
const updateSalary = async (salary: string, id: string): Promise<void> => {
  await connection.where({ id: id }).update({ salary: salary }).into("Actor");
}

// updateSalary("50", "001");

//  Exercício 2 - B:
const deleteActor = async (id: string): Promise<void> => {
  await connection.where({ id: id }).into("Actor").delete();
}

// deleteActor("001");

// Exercício  2 - C:
const getAverageSalary = async (gender: string): Promise<any> => {
  const result = await connection.where({ gender }).avg("salary as salary").into("Actor");
  return result[0].salary;
}

// getAverageSalary("male").then((res) => { console.log(res)});

// Exercício 3 - A:
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

  return result[0][0];
}

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err: any) {
    res.status(400).send({ message: err.message, });
  }
});

// Exercício 3 - B:
app.get("/actor/", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender as string;
    const result = await countActors(gender);
    res.status(200).send({ count: result });
  } catch (err: any) {
    res.status(400).send({ message: err.sqlMessage || err.message })
  }
});

// Exercício 4 - A:
app.put("/actor/", async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string;
    const salary = req.query.salary as string;
    await updateSalary(salary, id);
    res.status(200).send({ message: "Salário atualizado com sucesso." });
  } catch (err: any) {
    res.status(400).send({ message: err.sqlMessage || err.message })
  }
});

// Exercício 4 - B:
app.delete("/actor/", async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string;
    await deleteActor(id);
    res.status(200).send({ message: "Deletado com sucesso." });
  } catch (err: any) {
    res.status(400).send({ message: err.sqlMessage || err.message })
  }
});
