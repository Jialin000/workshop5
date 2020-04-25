const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  id: String,
  first_name: String,
  last_name: String
});

const Author = mongoose.model("author", authorSchema, "author");
mongoose.authors.insertOne({id: "962853",first_name: "Jialin",last_name: "Li"})
module.exports = Author;
