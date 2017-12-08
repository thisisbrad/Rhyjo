const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListSchema = new Schema({
  title: {
    type: String,
    required: true,
    lowercase: true
  },
  todos: [{ item: { type: String } }]
});

mongoose.model('list', ListSchema);
