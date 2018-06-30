const express = require('express');
const app = express();

const routes = require('../router');

app.use('/', routes);

app.listen(8000, () => {
  console.log('Server listening at PORT: 8000');
});