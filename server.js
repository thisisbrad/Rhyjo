const express = require('express');
const { json } = require('body-parser');
const morgan = require('morgan');

const app = express();
app.use(json());

const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send({ hello: 'We in dis' });
});

const server = app.listen(PORT, () => {
  console.log(`### Server is listening on PORT: ${server.address().port} ###`);
});
