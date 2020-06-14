
exports.up = function(knex) {
  return knex.schema.createTable('comunicados', function(table){
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('body').notNullable();
      table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('comunicados');
};
