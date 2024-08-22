/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema
		.table('workouts', function (table) {
			table.dropForeign('userId');
		})
		.then(function () {
			return knex.schema.table('workouts', function (table) {
				table.string('userId').alter();
			});
		});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema
		.table('workouts', function (table) {
			table.integer('userId').alter();
		})
		.then(function () {
			return knex.schema.table('workouts', function (table) {
				table.foreign('userId').references('id').inTable('users');
			});
		});
};
