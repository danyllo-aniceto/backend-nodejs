import { getCustomRepository } from "typeorm";
import { IUserDTO } from "../dtos/IUserDTO";
import { UserRepository } from "../repository/UserRepository";

class PutUserByIdService {
    async handle(id: number, data: IUserDTO){
      const conectUser = getCustomRepository(UserRepository)
      await conectUser.update(id, {
        name: data.name,
        email: data.email,
        password: data.password,
        is_admin: data.is_admin
      })
    }
}

export { PutUserByIdService };