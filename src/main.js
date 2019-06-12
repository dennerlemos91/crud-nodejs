const express = require('express');
const config = require('./config/app.config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('express').Router();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(
  config.database,
  {
    useNewUrlParser: true
  },
  () => {
    console.log('Conexão com banco realizada com sucesso!!');
  }
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use('/api', router);
app.use('/api', require('./routes/index.js'));

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});

module.exports = {
  router
};
