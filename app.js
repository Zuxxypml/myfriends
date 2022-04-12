// Using Node.js `require()`
const { type } = require("express/lib/response");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myfriendsDB");
console.log("Database Connected.");

// Schema
// Food Schema
const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Don't you have a favorite food"],
  },
});
// Food Model
const Food = mongoose.model("Food", FoodSchema);
// My Friends Foods
const yam = new Food({
  name: "Yam",
});
const rice = new Food({
  name: "Rice",
});
const chicken = new Food({
  name: "Chicken",
});
// Inserting to Foods Collection
// Food.insertMany([yam, rice, chicken], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated Database.");
//   }
//   mongoose.connection.close();
//   console.log("Database Disconnected");
// });
// Fruit Schema
const FruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "I need a favorite fruit please. "],
  },
});
// Fruit Model
const Fruit = mongoose.model("Fruit", FruitSchema);
// My Friends Fruits
const mango = new Fruit({
  name: "Mango",
});
const apple = new Fruit({
  name: "Apple",
});
const carrot = new Fruit({
  name: "Carrot",
});
const banana = new Fruit({
  name: "Banana",
});
// Inserting to Fruit Collection
// Fruit.insertMany([mango, apple, carrot, banana], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Added to Database");
//   }
//   mongoose.connection.close();
//   console.log("Database Disconnected");
// });

// Person Schema
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    max: 30,
    min: 5,
    required: [true, "Please enter a name !!"],
  },
  favoriteFood: {
    type: FoodSchema,
    required: [true, "No favorite Food ?"],
  },
  favoriteFruit: {
    type: FruitSchema,
    required: [true, "What's your favorite Fruit ?"],
  },
  profession: String,
});
// Person Model
const Person = mongoose.model("Person", PersonSchema);
// My Friends
const samuel = new Person({
  name: "Samuel Momoh",
  favoriteFood: yam,
  favoriteFruit: mango,
  profession: "Fullstack Developer, Digital Marketer and Data Analyst",
});
const seun = new Person({
  name: "Seun Jegede",
  favoriteFood: rice,
  favoriteFruit: apple,
  profession: " Fullstack Developer, Baker, Computer Engineer",
});
const marvellous = new Person({
  name: "Marvellous Adetunji",
  favoriteFood: rice,
  favoriteFruit: carrot,
  profession: "Product Designer, Fullstack Developer, Pythonista.",
});
const akin = new Person({
  name: "Akinade Adebisi",
  favoriteFood: chicken,
  favoriteFruit: banana,
  profession: "Fullstack Developer..",
});
// Person.insertMany([samuel, marvellous, seun, akin], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Database Updated Succesfully");
//   }
//   mongoose.connection.close();
//   console.log("Database Disconnected");
// });
// {
//   name: "Seun Jegede";
// }
Person.find((err, people) => {
  if (err) {
    console.log(err);
  } else if (people) {
    people.forEach((person) => {
      console.log(
        "My name is " +
          person.name +
          ", I am a " +
          person.profession +
          " My Favorite Food is " +
          person.favoriteFood.name +
          " and my Favorite Fruit is " +
          person.favoriteFruit.name
      );
    });
  } else {
    console.log("Null");
  }
  mongoose.connection.close();
  console.log("Database Disconnected");
});
// Person.find({ name: "Samuel Momoh" }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Found " + data);
//   }
//   mongoose.connection.close();
//   console.log("Database Disconnected");
// });
