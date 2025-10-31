// backend/data/database/db.js
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'ZAQ!2wsx',
  database: process.env.DB_NAME || 'gamehub',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// opcjonalne sprawdzenie połączenia (wywołuj przy starcie)
async function testConnection() {
  try {
    const conn = await pool.getConnection();
    await conn.ping();
    conn.release();
    console.log('Połączono z bazą MySQL/MariaDB ✔');
  } catch (err) {
    console.error('Błąd połączenia z DB:', err.message);
    process.exit(1); // przerwij uruchamianie, jeśli potrzebujesz
  }
}

module.exports = { pool, testConnection };
