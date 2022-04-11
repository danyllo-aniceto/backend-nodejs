import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";

class CreateUserController {
    async handle(req: Request, res: Response) {
      const { name, email, password, is_admin } = req.body
      console.log(name, email, password, is_admin)

      try {
        const conectUser = getCustomRepository(UserRepository)
        const user = conectUser.create({ name, email, password, is_admin })
        console.log(user)
        await conectUser.save(user)

        res.status(201).json(user)
      } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar o usuario' })
      }
    }
}

export { CreateUserController }