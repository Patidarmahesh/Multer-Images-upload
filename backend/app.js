const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const routes = require("./route");
const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/studentifo');


app.use(
  cors({
    origin:'*'
  })
);

app.use(express.json());

app.use("/",routes);
app.use('/',express.static('imagestorage'));

app.listen(8000, () => {
  console.log("Port Is Listening 8000");
});
