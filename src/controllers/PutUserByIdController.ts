import { Request, Response } from "express";
import { IUserDTO } from "../dtos/IUserDTO";
import { PutUserByIdService } from "../services/PutUserByIdService";
import { UserValidator } from "../validators/UserValidator";

class PutUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params
    const data: IUserDTO = req.body

    const validator = new UserValidator();
    try {
      await validator.updateByIdValidator().validate({ id: Number(id), ...data }, { abortEarly: false });
    } catch (error) {
      return res.status(400).json({ message: error.message})
    }
    if (!(await validator.idExist(Number(id)))) {
      return res.status(400).json({message: 'User does not exist'})
    }

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

