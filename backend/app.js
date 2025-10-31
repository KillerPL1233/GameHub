// backend/app.js
const express = require('express');
const { testConnection } = require('./data/database/db_connect');
require('dotenv').config();

const app = express();
app.use(express.json());

// import routów
const usersRouter = require('./routes/scripts');
app.use('/api/users', usersRouter);

// health check
app.get('/', (req, res) => res.send('API działa!'));

// start servera + test DB
const PORT = process.env.PORT || 3000;
(async () => {
  await testConnection(); // sprawdź połączenie podczas startu
  app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
  });
})();
