import { Request, Response } from "express";
import { IUserDTO } from "../dtos/IUserDTO";
import { PutUserByIdService } from "../services/PutUserByIdService";

class PutUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const data: IUserDTO = req.body

    try {
      const putUserByIdService = new PutUserByIdService();
      await putUserByIdService.handle(Number(id), data)
      res.status(200).json({ message: 'Usuario atualizado com sucesso' })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar o usuario' })
    }
  }
}

export { PutUserByIdController };

