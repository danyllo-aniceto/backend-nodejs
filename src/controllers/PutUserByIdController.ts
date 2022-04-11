import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";

class PutUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const { name, email, password, is_admin } = req.body

    try {
      const conectUser = getCustomRepository(UserRepository)
      await conectUser.update(id, {
        name: name,
        email: email,
        password: password,
        is_admin: is_admin
      })

      res.status(200).json({ message: 'Usuario atualizado com sucesso' })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar o usuario' })
    }
  }
}

export { PutUserByIdController }
