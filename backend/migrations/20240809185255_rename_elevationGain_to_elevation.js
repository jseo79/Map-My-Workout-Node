/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.table('workouts', function (table) {
		table.renameColumn('elevationGain', 'elevation');
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.table('workouts', function (table) {
		table.renameColumn('elevation', 'elevationGain');
	});
};
