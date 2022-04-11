import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";

class GetUserController {
  async handle(req: Request, res: Response) {
    try {
      const conectUser = getCustomRepository(UserRepository)
      const allUsers = await conectUser.find()

      res.status(200).json(allUsers)
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar todos usuarios' })
    }
  }
}

export { GetUserController }