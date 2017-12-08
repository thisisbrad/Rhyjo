const express = require('express');
const { json } = require('body-parser');

const app = express();
app.use(json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({ hello: 'We in dis' });
});

const server = app.listen(PORT, () => {
  console.log(`### Server is listening on PORT: ${server.address().port} ###`);
});
