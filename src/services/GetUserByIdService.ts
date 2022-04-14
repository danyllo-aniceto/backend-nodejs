import { getCustomRepository } from "typeorm";
import { IUserDTO } from "../dtos/IUserDTO";
import { UserRepository } from "../repository/UserRepository";

class GetUserByIdService {
    async handle(id: string):Promise<IUserDTO>{
        const conectUser = getCustomRepository(UserRepository)
        const user = await conectUser.findOne(id);
        return user;
    }
}

export {GetUserByIdService}