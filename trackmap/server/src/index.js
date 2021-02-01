const express = require('express');
const mongoose = require('mongoose');
import { mongoUri } from './keys';

const app = express();

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo: ', err);
});

app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});