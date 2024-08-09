import { Request, Response } from 'express';
import { Workout } from '../workout-types';
import WorkoutModel from '../models/workout-model';
import { calculateWorkoutDetails } from '../workoutUtils';

export default class WorkoutController {
	static async addWorkout(req: Request<Partial<Workout>>, res: Response) {
		try {
			const calculatedWorkout = calculateWorkoutDetails(req.body);
			await WorkoutModel.addWorkout(calculatedWorkout);
			return res.send(req.body);
		} catch (e) {
			console.log(e);
		}
	}
}
