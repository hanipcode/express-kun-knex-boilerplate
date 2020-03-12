import knex from 'knex';
const db = knex({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    database: 'pencatar'
  }
});

db('users').then(dat => console.log(dat));

export default db;
