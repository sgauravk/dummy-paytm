const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PWD,
  database: process.env.DB
});

connection.connect();

const app = new express();

const addNewUser = function(req, res) {
  const name = req.body;
  connection.query(
    "select count(name) as count from usersDetails where name = ?",
    name,
    (err, results, fields) => {
      if (results[0].count === 0) {
        connection.query(
          "insert into usersDetails values(?,?)",
          [name, 0],
          (err, results, fields) => {}
        );
        connection.query(
          "select balance from usersDetails where name = ?",
          name,
          (err, results) => {
            console.log("result", results);
            res.send(JSON.stringify(results[0].balance));
          }
        );
      }
    }
  );
};

const updateWallet = function(req, res) {
  const { totalBalance, username } = JSON.parse(req.body);
  connection.query(
    "update userDetails set balance=?  where name like ?",
    [totalBalance, username],
    (err, results, fields) => {
      res.end();
    }
  );
};

app.use(bodyParser.text());
app.post("/addUser", addNewUser);
app.post("/addMoney", updateWallet);
app.listen(3050, () => "listening on 3050");
