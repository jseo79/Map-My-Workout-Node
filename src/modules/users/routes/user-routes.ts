import express from 'express';
import UserController from '../controllers/user-controller';

const userRoutes = express.Router();

userRoutes.get('user', (req, res) => {});

userRoutes.post('/user', UserController.addUser);

export default userRoutes;
