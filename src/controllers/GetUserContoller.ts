import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";
import { GetUserService } from "../services/GetUserService";

class GetUserController {
  async handle(req: Request, res: Response) {
    try {
      const getUserService = new GetUserService();
      const allUsers = await getUserService.handle();
      res.status(200).json(allUsers)
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar todos usuarios' })
    }
  }
}

export { GetUserController }