const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '..', 'data', 'users.json');

function readUsers() {
  const raw = fs.readFileSync(DATA_PATH);
  return JSON.parse(raw);
}
function writeUsers(data) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

// GET /api/users  -> lista
router.get('/', (req, res) => {
  const users = readUsers();
  res.json(users);
});

// GET /api/users/:id -> pojedynczy użytkownik
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const users = readUsers();
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});


module.exports = router;
