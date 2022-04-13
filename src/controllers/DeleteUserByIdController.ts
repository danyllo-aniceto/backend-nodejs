import { Request, Response } from "express";
import { DeleteUserByIdService } from "../services/DeleteUserByIdService";

class DeleteUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    try {
      const deleteUserByIdService = new DeleteUserByIdService()
      await deleteUserByIdService.handle(id);

      res.status(200).json({ message: 'Usuario deletado com sucesso' })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar o usuario' })
    }
  }
}

export { DeleteUserByIdController }

