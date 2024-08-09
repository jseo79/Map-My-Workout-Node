import { Request, Response } from 'express';
import { Workout } from '../workout-types';
import WorkoutModel from '../models/workout-model';
import { calculateWorkoutDetails } from '../workoutUtils';

export default class WorkoutController {
	static async addWorkout(req: Request<Partial<Workout>>, res: Response) {
		try {
			const workout: Workout = req.body;
			const calculatedWorkout = calculateWorkoutDetails(workout);

			// Save the workout to the database (mock database for now)
			// await WorkoutModel.addWorkout(calculatedWorkout);

			return res.json(calculatedWorkout);
		} catch (e) {
			console.log(e);
			return res.status(500).json({ error: 'Internal Server Error' });
		}
	}
}
