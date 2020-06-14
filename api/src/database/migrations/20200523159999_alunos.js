
exports.up = function(knex) {
  return knex.schema.createTable('alunos', function(table){
    table.increments('id').primary();

    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone').notNullable();

    table.integer('responsavel_id').unsigned()
    table.integer('serie_id').unsigned()

    table.foreign('serie_id').references('id').inTable('series');
    table.foreign('responsavel_id').references('id').inTable('responsaveis');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('alunos');
};
