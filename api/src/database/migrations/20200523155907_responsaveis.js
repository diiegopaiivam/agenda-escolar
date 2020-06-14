
exports.up = function(knex) {
  return knex.schema.createTable('responsaveis', function(table){
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone1').notNullable();
    table.string('phone2');

  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('responsaveis');
};
