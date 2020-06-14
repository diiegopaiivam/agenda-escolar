
exports.up = function(knex) {
    return knex.schema.createTable('eventos', function(table){
        table.increments().primary();
        table.string('title').notNullable();
        table.string('body').notNullable();
        table.timestamps();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('eventos');
};
