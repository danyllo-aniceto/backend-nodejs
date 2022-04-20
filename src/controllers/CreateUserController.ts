import { Request, Response } from "express";
import { IUserDTO } from "../dtos/IUserDTO";
import { CreateUserService } from "../services/CreateUserService";
import { UserValidator } from "../validators/UserValidator";

class CreateUserController {
    async handle(req: Request, res: Response) {
      const data: IUserDTO = req.body;

      const validator = new UserValidator();
      try {
        await validator.createValidator().validate(data, { abortEarly: false });
      } catch (error) {
        return res.status(400).json({ message: error.message})
      }

      try {
        const createUserService = new CreateUserService()
        const user = await createUserService.handle(data);
        res.status(201).json(user)
      } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar o usuario' })
      }
    }
}

export { CreateUserController };
