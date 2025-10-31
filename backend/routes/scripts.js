// backend/routes/users.js
const express = require('express');
const router = express.Router();
const { pool } = require('../data/database/db_connect');

// przykładowy endpoint: pobierz wszystkie gry (zakładam tabelę games)
router.get('/test', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM test'); // dopasuj do rzeczywistej nazwy tabeli
    res.json(rows);
  } catch (err) {
    console.error('DB error:', err);
    res.status(500).json({ error: 'Błąd serwera' });
  }
});

module.exports = router;
