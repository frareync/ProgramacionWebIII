import mysql from 'mysql2/promise'; // version con promesas

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'practica2'
});
