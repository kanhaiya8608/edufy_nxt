// db.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // Leave it empty if there is no password
  database: 'schools',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  port: 3307
});

module.exports = pool;
