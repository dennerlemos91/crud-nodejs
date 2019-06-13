const express = require('express');
const config = require('./config/app.config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();

mongoose.connect(
  config.database,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  },
  () => {
    console.log('Successfully connected database!');
  },
  err => {
    console.error('Failed to connect to database', err);
    process.exit();
  }
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', router);
app.use('/api', require('./routes/index.js'));

app.listen(config.port, () => {
  console.log(`Server is running on: htto://localhost:${config.port}`);
});
