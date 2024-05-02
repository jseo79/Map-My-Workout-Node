import { Request, Response } from 'express';
import { User } from '../user-types';
import UserModel from '../models/user-model';

export default class UserController {
	static async addUser(req: Request<Partial<User>>, res: Response) {
		try {
			await UserModel.addUser(req.body);
			return res.send(req.body);
		} catch (e) {
			console.log(e);
		}
	}
}
