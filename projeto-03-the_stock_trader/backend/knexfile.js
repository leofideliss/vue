// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'postgres',
  connection: {
    host: '127.0.0.1',
    port : 5432,
    user: 'postgres',
    password: '123456',
    database: 'stocktrader',
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }


};
