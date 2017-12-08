const mongoose = require('mongoose');
const List = mongoose.model('list');

module.exports = app => {
  app.get('/list/', async (req, res) => {
    try {
      const lists = await List.find({});
      console.log('duhhh?', lists);
      res.send({ lists });
    } catch (error) {
      console.error('ERROR?', error);
      res.send({ error });
    }
  });

  app.post('/list/', async (req, res) => {
    const { title } = req.body;
    try {
      const list_data = new List({ title });
      const list = await list_data.save();
      console.log('duhhh?', list.id);
      res.send({ list });
    } catch (error) {
      res.send({ error });
    }
  });

  app.patch('/list/:listId', (req, res) => {
    const id = req.params.listId;
    console.log('Got the data!', id);
    res.send({ id });
  });

  app.delete('/list/:listId', (req, res) => {
    const id = req.params.listId;
    console.log('Got the data!', id);
    res.send({ id });
  });
};
