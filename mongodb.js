// const mongoose = require("mongoose");
// const User = require("./User");

// const client = mongoose.connect("mongodb://127.0.0.1:27017/PRACTICE");

// createUser();
// // deleteUsers();
// async function createUser() {
//   // !: create with modal
//   //   const user = new User({ name: "thamizhhd", age: 21 });
//   //   user.save().then(() => console.log("user is added in DB"));

//   // ! create with mongoose create method
//   const user = await User.create({ name: "thamizhhd", age: 21 });

//   // ! update value
//   user.docId = `${user.id}`;
//   // user.save();
// }

// function deleteUsers() {
//   User.deleteMany({});
// }
