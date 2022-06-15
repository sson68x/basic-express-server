'use strict';

const express = require('express');
const logger = require('./middleware/logger');
const validator = require ('./middleware/validator');
const error404Handler = require('./error-handlers/404');
const error500Handler = require('./error-handlers/500');
const app = express();

const PORT = process.env.PORT || 3002;

app.use(logger);

app.get('/hello', validator, (req, res, next) => {
  let { name } = req.query;
  res.status(200).send(`Personal Greetings ${name}`);
});

app.get('/hello/:name', (req, res, next) => {
  let { name } = req.params;
  res.status(200).send(`Hello ${name}`);
});

app.use('*', error404Handler);

app.use(error500Handler);

module.exports = {
  server: app,
  start: () => app.listen(PORT, () => console.log(`running on port ${PORT}`)),
};
