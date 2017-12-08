const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListSchema = new Schema({
  title: {
    type: String,
    required: true,
    lowercase: true,
    index: { unique: true }
  },
  todos: [{ text: { type: String } }]
});

mongoose.model('list', ListSchema);
