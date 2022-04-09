import { Request, Response, Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from './repository/UserRepository';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hellow world' });
});

router.post('/users', async (req: Request, res: Response) => {
    console.log('caiu aqui')
    const { name, email, password, is_admin } = req.body
    console.log(name, email, password, is_admin)

    try {
        const conectUser = getCustomRepository(UserRepository)
        const user = conectUser.create({ name, email, password, is_admin })
        console.log(user)
        await conectUser.save(user)

        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ message: 'Erro ao cadastrar o usuario' })
    }
});

export { router };