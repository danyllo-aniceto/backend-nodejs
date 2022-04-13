import { Request, Response } from "express";
import { GetUserByIdService } from "../services/GetUserByIdService";

class GetUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    try {
      const getUserByIdService = new GetUserByIdService()
      await getUserByIdService.handle(id)

      res.status(200).json(id)
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar todos usuarios' })
    }
  }

}

export { GetUserByIdController };
