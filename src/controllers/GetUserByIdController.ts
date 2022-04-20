import { Request, Response } from "express";
import { GetUserByIdService } from "../services/GetUserByIdService";
import { UserValidator } from "../validators/UserValidator";

class GetUserByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params

    const validator = new UserValidator();
    try {
      await validator.getByIdValidator().validate(Number(id), { abortEarly: false });
    } catch (error) {
      return res.status(400).json({ message: error.message})
    }
      
    try {
      const getUserByIdService = new GetUserByIdService()
      const user = await getUserByIdService.handle(id)
      if(!user) {
        res.status(200).json({message: 'Este usuario não existe'})
      }
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar todos usuarios' })
    }
  }

}

export { GetUserByIdController };
