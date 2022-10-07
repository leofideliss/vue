
exports.up = function(knex, Promise) {
  return knex.schema.createTable('acoes',table=>{
    table.increments('id').primary();
    table.integer('qtd');
    table.string('nome');
    table.float('preco');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('acoes');
};
