
exports.up = function(knex) {
  return knex.schema.createTable('series', function(table){
        table.increments('id').primary();
        table.string('serie').notNullable();
        table.string('turno').notNullable();
        table.string('turma');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('series');
};
