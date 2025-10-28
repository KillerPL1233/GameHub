const express = require('express');
const app = express();
const usersRouter = require('./routes/users');

// middleware
app.use(express.json()); // parsowanie JSON w body

// routing
app.use('/api/users', usersRouter);

// prosty root
app.get('/', (req, res) => {
  res.send({ status: 'OK', message: 'API działa' });
});

// błąd 404
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// uruchomienie
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
