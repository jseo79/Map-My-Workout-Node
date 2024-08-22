import { Request, Response } from 'express';
import { Workout } from '../workout-types';
import WorkoutModel from '../models/workout-model';
import { calculateWorkoutDetails, formatTimesForMySQL } from '../workoutUtils';

export default class WorkoutController {
	static async addWorkout(req: Request<Partial<Workout>>, res: Response) {
		try {
			const ip = req.headers['x-forwarded-for'] || req.ip;
			const workoutWithUserId = { ...req.body, userID: ip };
			const calculatedWorkout =
				calculateWorkoutDetails(workoutWithUserId);
			const formattedWorkout = formatTimesForMySQL(calculatedWorkout);
			await WorkoutModel.addWorkout(formattedWorkout);
			return res.send(req.body);
		} catch (e) {
			console.log(e);
		}
	}

	static async getAllWorkouts(req: Request, res: Response) {
		try {
			const ip = req.headers['x-forwarded-for'] || req.ip;
			const workouts = await WorkoutModel.getAllWorkouts(String(ip));
			return res.send(workouts);
		} catch (e) {
			console.log(e);
		}
	}

	static async deleteWorkout(req: Request, res: Response) {
		try {
			const id = parseInt(req.params.id, 10);
			await WorkoutModel.deleteWorkout(id);
			res.status(204).end();
		} catch (error) {
			res.status(500).json({ error: 'Failed to delete workout' });
		}
	}
}
