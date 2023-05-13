const { Pool } = require('pg')
 
// connection of db on .env file
const pool = new Pool()
 
module.exports = {
  query: (text, params) => pool.query(text, params),
}