import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";

class GetUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    try {
      const conectUser = getCustomRepository(UserRepository)
      const user = await conectUser.findOne(id);

      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar todos usuarios' })
    }
  }

}

export { GetUserByIdController }