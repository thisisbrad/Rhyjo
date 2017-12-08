module.exports = app => {
  app.get('/list/', (req, res) => {
    res.send({ list: [{ item: 'do this junk' }, { item: 'make a script' }] });
  });
};
