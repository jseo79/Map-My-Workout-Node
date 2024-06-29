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
}
