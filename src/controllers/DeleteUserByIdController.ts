import { Request, Response } from "express";
import { DeleteUserByIdService } from "../services/DeleteUserByIdService";
import { UserValidator } from "../validators/UserValidator";

class DeleteUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const validator = new UserValidator();
    try {
      await validator.deleteByIdValidator().validate(Number(id), { abortEarly: false });
    } catch (error) {
      return res.status(400).json({ message: error.message})
    }

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

