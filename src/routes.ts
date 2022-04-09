import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hellow world' });
});

router.post('/users', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Ola mundo' });
});

export { router };