const express = require('express');
const mongoose = require('mongoose');
const { json } = require('body-parser');
const morgan = require('morgan');

require('./models/List');

const app = express();
app.use(json());

const PORT = process.env.PORT || 5000;

app.use(morgan('dev'));

const mongoURI = 'mongodb://localhost:27017/rhyjo';

mongoose.connect(mongoURI);

require('./routes/listRoutes')(app);

app.get('/', (req, res) => {
  res.send({ hello: 'We in dis' });
});

const server = app.listen(PORT, () => {
  console.log(`### Server is listening on PORT: ${server.address().port} ###`);
});
