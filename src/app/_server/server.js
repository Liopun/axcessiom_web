const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const crypto = require("crypto");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const port = process.env.port || 8888;
const server = app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
