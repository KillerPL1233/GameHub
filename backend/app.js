const express = require('express');
const app = express();
const gamesRouter = require('./routes/games');
const cors = require('cors');

// middleware
app.use(express.json()); // parsowanie JSON w body

// usługa cors
app.use(cors()); 

// routing
app.use('/api/games', gamesRouter);

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


