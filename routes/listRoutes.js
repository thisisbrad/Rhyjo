module.exports = app => {
  app.get('/list/', (req, res) => {
    res.send({ list: [{ item: 'do this junk' }, { item: 'make a script' }] });
  });

  app.post('/list/', (req, res) => {
    console.log('Got the data!', req.body);
    res.send({ data: req.body });
  });
};
