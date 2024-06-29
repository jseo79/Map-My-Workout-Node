import knex from '../../repository';
import { User } from '../user-types';

export default class UserModel {
	static async addUser(user: Partial<User>) {
		try {
			return knex<User>('users').insert(user);
		} catch (e) {
			console.log(e);
			throw e;
		}
	}
}
