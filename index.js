const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const subscriberRoute = require('./routes/subscriber');

const PORT = process.env.PORT;

mongoose.connect(process.env.URL_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false })
  .then(() => {
    console.log('mongodb conectado...');
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());

app.use(subscriberRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});