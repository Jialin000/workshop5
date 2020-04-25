require('dotenv').config()

const mongoose = require("mongoose");

// Connect to MongoDB
CONNECTION_STRING = "mongodb+srv://Jialin:wo201314@cluster0-zvbdw.mongodb.net/test?retryWrites=true&w=majority";
MONGO_URL = CONNECTION_STRING//.replace("<password>",process.env.MONGO_PASSWORD);

console.log(MONGO_URL);



mongoose.connect(MONGO_URL || "mongodb://localhost: 27017/info30005", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  dbName: "mylibraryapp"
});

const db = mongoose.connection;
db.on("error", err => {
  console.error(err);
  process.exit(1);
});

// db.author.insertOne({id: "9622853",first_name: "Jiadlin",last_name: "Lid"})


db.once("open", async () => {
  console.log("Mongo connection started on " + db.host + ":" + db.port);
});

require("./author");
