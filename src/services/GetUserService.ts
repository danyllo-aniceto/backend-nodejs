import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repository/UserRepository"

class GetUserService{
    async handle(){
        const conectUser = getCustomRepository(UserRepository)
        const allUsers = await conectUser.find()
        return allUsers;
    }
}

export { GetUserService }