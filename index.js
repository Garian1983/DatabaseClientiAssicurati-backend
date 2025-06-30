const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connesso'))
  .catch(err => console.error(err));

app.use('/api/clients', require('./routes/clients'));
app.use('/api/messages', require('./routes/messages'));

app.listen(PORT, () => console.log(`Server avviato sulla porta ${PORT}`));
