
exports.up = function(knex) {
  return knex.schema.createTable('professores', function(table){
    table.increments().primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();
    table.string('image').notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('professores');
};
