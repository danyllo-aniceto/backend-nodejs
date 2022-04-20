import { getCustomRepository } from "typeorm";
import { IUserDTO } from "../dtos/IUserDTO";
import { UserRepository } from "../repository/UserRepository";

class PutUserByIdService {
    async handle(id: number, data: IUserDTO){
      const conectUser = getCustomRepository(UserRepository)
      await conectUser.update(id, data)
    }
}

export { PutUserByIdService };