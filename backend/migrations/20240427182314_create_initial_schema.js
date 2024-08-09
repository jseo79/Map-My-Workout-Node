/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.createTable('users', function (table) {
			table.increments('id');
			table.string('email');
			table.string('firstName');
			table.string('lastName');
		})
		.createTable('workouts', function (table) {
			table.increments('id');
			table.integer('userId').unsigned();
			table.foreign('userId').references('users.id');
			table.enu('type', ['running', 'biking']).notNullable();
			table.float('duration').notNullable();
			table.datetime('startTime', { precision: 3 });
			table.datetime('endTime', { precision: 3 });
			table.enu('distanceType', ['miles', 'kilometers']);
			table.float('distance');
			table.decimal('latitude', 8, 6).notNullable();
			table.decimal('longitude', 9, 6).notNullable();
			table
				.datetime('createdOn', { precision: 6 })
				.defaultTo(knex.fn.now(6));

			table.float('pace'); // pace for running
			table.float('cadence'); // cadence for running
			table.float('speed'); // speed for biking
			table.float('elevationGain'); // elevation gain for biking
		});
};

exports.down = function (knex) {
	return knex.schema
		.table('workouts', function (table) {
			table.dropForeign('userId');
			table.dropColumn('pace');
			table.dropColumn('speed');
			table.dropColumn('cadence');
			table.dropColumn('elevationGain');
		})
		.dropTable('users')
		.dropTable('workouts');
};
