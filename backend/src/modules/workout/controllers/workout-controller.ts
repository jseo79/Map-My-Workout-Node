import { Request, Response } from 'express';
import { Workout } from '../workout-types';
import WorkoutModel from '../models/workout-model';

export default class WorkoutController {
	static async addWorkout(req: Request<Partial<Workout>>, res: Response) {
		try {
			await WorkoutModel.addWorkout(req.body);
			return res.send(req.body);
		} catch (e) {
			console.log(e);
			throw e;
		}
	}
}
