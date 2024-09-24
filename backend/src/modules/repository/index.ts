import knex from 'knex';

const knexConnection = knex({
	client: 'mysql2',
	connection: {
		host: '127.0.0.1',
		port: 3306,
		user: 'admin',
		password: 'admin',
		database: 'Map_My_Workout_dev_db',
	},
	migrations: {
		directory: './migrations',
	},
});

export default knexConnection;
