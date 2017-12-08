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

  app.patch('/list/:listId', async (req, res) => {
    const _id = req.params.listId;
    const item = req.body.item;

    try {
      const list_data = await List.findOne({ _id });
      list_data.todos.push({ item });
      const list = await list_data.save();
      res.send({ list });
    } catch (error) {
      console.error('ERROR?', error);
      res.send({ error });
    }
  });

  app.delete('/list/:listId', (req, res) => {
    const id = req.params.listId;
    console.log('Got the data!', id);
    res.send({ id });
  });
};
