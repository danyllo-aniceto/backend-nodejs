import { Request, Response, Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { DeleteUserByIdController } from './controllers/DeleteUserByIdController';
import { GetUserByIdController } from './controllers/GetUserByIdController';
import { GetUserController } from './controllers/GetUserContoller';
import { PutUserByIdController } from './controllers/PutUserByIdController';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hellow world' });
});

const createUserController = new CreateUserController();
const getUserController = new GetUserController();
const getUserById = new GetUserByIdController();
const deleteUserByIdController = new DeleteUserByIdController();
const putUserByIdController = new PutUserByIdController();

router.post('/users', createUserController.handle);
router.get('/users', getUserController.handle);
router.get('/users/:id', getUserById.handle);
router.delete('/users/:id', deleteUserByIdController.handle);
router.put('/users/:id', putUserByIdController.handle);


export { router };