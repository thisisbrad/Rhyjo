const ListSchema = new Schema({
  title: {
    type: String,
    required: true,
    lowercase: true,
    index: { unique: true }
  }
  todos: [{ text: { type: String } }]
});

mongoose.model('lists', ListSchema);
