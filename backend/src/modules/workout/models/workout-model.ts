import knex from '../../repository';
import { Workout } from '../workout-types';

export default class WorkoutModel {
	static async addWorkout(workout: Partial<Workout>) {
		try {
			return knex<Workout>('workouts').insert(workout);
		} catch (e) {
			console.log(e);
			throw e;
		}
	}

	static async getAllWorkouts(userIP: string) {
		try {
			return knex<Workout>('workouts')
				.where('userID', userIP)
				.select('*');
		} catch (e) {
			console.log(e);
			throw e;
		}
	}

	static async deleteWorkout(id: number) {
		try {
			const result = await knex<Workout>('workouts')
				.where('id', id)
				.del();

			if (result === 0) {
				throw new Error('No workout found to delete');
			}
		} catch (e) {
			console.log(e);
			throw e;
		}
	}
}
