const express = require('express');
const app = express();
const bodyParser = require("body-parser");

// foods route
const foods = require("./routes/foods");
// const restaurants = require("./routes/restaurants");

app.use(bodyParser.urlencoded({extended: true}));
app.use("/api/foods", foods);
// app.use("/api/restaurants", restaurants);

app.listen(3000, () => {
  console.log(`Server running!`);
})