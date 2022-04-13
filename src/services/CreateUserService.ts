import { getCustomRepository } from "typeorm";
import { IUserDTO } from "../dtos/IUserDTO";
import { UserRepository } from "../repository/UserRepository";

class CreateUserService {
    async handle(data: IUserDTO): Promise<IUserDTO> {
        const conectUser = getCustomRepository(UserRepository)
        const user = conectUser.create(data)
        await conectUser.save(user)
        return user;
    }
}

export { CreateUserService }