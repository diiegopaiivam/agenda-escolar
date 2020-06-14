
exports.up = function(knex) {
  return knex.schema.createTable('enviados', function(table){
      table.increments().primary();
      table.integer('aluno_id').unsigned();
      table.integer('responsavel_id').unsigned();
      table.integer('serie_id').unsigned();
      table.integer('comunicado_id').unsigned();

      table.foreign('aluno_id').references('id').inTable('alunos');
      table.foreign('responsavel_id').references('id').inTable('responsaveis');
      table.foreign('serie_id').references('id').inTable('series');
      table.foreign('comunicado_id').references('id').inTable('comunicados');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('enviados');
};
