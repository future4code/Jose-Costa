import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function selectAllUsers(name: string, type: string, sort: string, order: string, page: number): Promise<any> {
   if (page < 1 || isNaN(page)) {
      page = 1;
   }
   let size = 1;
   let offset = size * (page - 1)

   const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       WHERE name LIKE "%${name}%"
       OR type LIKE "%${type}%"
       ORDER BY ${sort} ${order}
       LIMIT ${size} OFFSET ${offset}
       ;
    `)
   return result[0]
}

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   try {
      const name = req.query.name as string;
      const type = req.query.type as string;
      const sort = req.params.sort || "name";
      const order = req.params.order || "DESC";
      const page = parseInt(req.params.page);

      const users = await selectAllUsers(name, type, sort, order, page)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}