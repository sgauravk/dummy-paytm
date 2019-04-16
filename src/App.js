const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const users = require("./usersData.json");

const app = new express();

const addNewUser = function(req, res) {
  const name = req.body;
  const data = {username: name, money: 0}
  !users.some(user => user.username == name) && users.push(data);
  const money = users.find(user=> user.username == name).money;
  fs.writeFileSync("./src/usersData.json", JSON.stringify(users));
  res.send(JSON.stringify(users.some(user => user.username == name)));
  res.end();
};

const updateWallet = function(req, res){
  const {totalBalance, username} = JSON.parse(req.body);
  users.find(user => user.username == username).money = totalBalance;
  res.end();
}

app.use(bodyParser.text());
app.post("/addUser", addNewUser);
app.post("/addMoney", updateWallet);
app.listen(3050, () => "listening on 3050");
