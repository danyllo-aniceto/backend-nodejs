import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repository/UserRepository";

class DeleteUserByIdService {
    async handle(id: string): Promise<void> {
        const conectUser = getCustomRepository(UserRepository)
        await conectUser.delete({ id: Number(id) });
    }
}

export { DeleteUserByIdService} 