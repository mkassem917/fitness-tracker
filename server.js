//NPM Packages
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const compression = require("compression");



//Required Port Settings
const PORT = process.env.PORT || 3000;

//Express
const app = express();

//Morgan
app.use(logger("morgan dev"));

//Data Parsing
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Public Folder
app.use(express.static("public"));

//Mongoose Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

//Required Routes
app.use(require("./routes/api"));
//app.use(require("./routes/html"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
