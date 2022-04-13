import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";

class GetUserByIdService {
    async handle(id: string):Promise<string>{
        const conectUser = getCustomRepository(UserRepository)
        await conectUser.findOne(id);
        return id;
    }
}

export {GetUserByIdService}