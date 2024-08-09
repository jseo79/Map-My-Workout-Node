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

	static async getAllWorkouts() {
		try {
			return knex<Workout>('workouts').select('*');
		} catch (e) {
			console.log(e);
			throw e;
		}
	}
}
