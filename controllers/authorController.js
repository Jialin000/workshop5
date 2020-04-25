const mongoose = require("mongoose");

// import author model
const Author = mongoose.model("author");

var url = "mongodb://localhost: 27017/info30005";

    
//function to handle a request to get all authors
const getAllAuthors = async (req, res) => {
  try {
    const all_authors = await Author.find();
    return res.send(all_authors);
  } catch (err) {
    res.status(400);
    return res.send("Database query failed");
  }
};
// const getAllAuthors = async (req, res) => {
//   var resultArray = [];
//   try {
//     mongoose.connect(url, function(err, db){
//       var cursor = db.collection('author').find();
//       cursor.forEach(function(docm, err){
//         resultArray.push(doc);
//       }),function(){
//         db.close()
//       };
//     });
//     return res.send(resultArray);
//   } catch (err) {
//     res.status(400);
//     return res.send("Database query failed");
//   }
// };
    


// function to modify author by ID
const updateAuthor = async (req, res) => {
  res.send("Working on this feature");
};

// function to add author
const addAuthor = async (req, res) => {
  // var item = {
  //   id: req.body.id,
  //   first_name: req.body.first_name,
  //   last_name: req.body.last_name
  // }
  // mongoose.connect(url, function(err, db){
  //   db.collection('author').insertOne(item);
  //   db.close();
  // });
 res.send("Working on this feature");
};

// function to get author by id
const getAuthorByID = (req, res) => {
  res.send("Working on this feature");
};

// remember to export the functions
module.exports = {
  getAllAuthors,
  getAuthorByID,
  addAuthor,
  updateAuthor
};
