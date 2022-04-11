import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";

class DeleteUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    try {
      const conectUser = getCustomRepository(UserRepository)
      await conectUser.delete({ id: Number(id) });

      res.status(200).json({ message: 'Usuario deletado com sucesso' })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar o usuario' })
    }
  }
}

export { DeleteUserByIdController }

