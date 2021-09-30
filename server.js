const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const router = require('./routes/schoolRouter')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("CRUD Operations API with MySQL");
  });

app.use("/school",router)

  app.listen(3000, () => {
    console.log("Server is running on port 3000.");
  });