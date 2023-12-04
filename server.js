const express = require("express");
const app = express();
const fs = require("fs");
const sql = require("mysql2");
const cors = require("cors");
app.use(cors({
  origin: "https://127.0.0.1:3000/sns.html",
  credentials: true,
  optionsSuccessStatus: 200,
}));
app.options('*', cors());
app.use(express.static(__dirname + "/src"));
app.use(express.json());
let club;
const connection = sql.createConnection({
  host: "localhost",
  user: "yoshinoyauser",
  password: "password",
  database: "sns",
});
connection.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log("connected");
  }
});
app.post("/", (req,res) => {
  console.log("aaa");
  let judge;
  let checkuser = req.body.user;
  let startsns = {
    user:checkuser,
    judge:judge
  }
  if(checkuser == undefined){
    startsns.judge = false;
    res.send(startsns);
  }else{
    startsns.judge = true;
    res.send(startsns);
  }
});
app.get("/", (req,res) => {
  console.log("bbb");
  let judge;
  let checkuser = req.body.user;
  let startsns = {
    user:checkuser,
    judge:judge
  }
  if(checkuser == undefined){
    startsns.judge = false;
    res.send(startsns);
  }else{
    startsns.judge = true;
    res.send(startsns);
  }
});
app.post("/club", (req, res) => {
  club = req.body.senddata;
  res.end();
});
app.get(`/:club`, (req, res) => {
  connection.query(
    `select message from sns where club = ?`,
    [req.params.club],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.json(results);
      }
    },
  );
});
app.post("/message", (req, res) => {
  let message = req.body.senddata.input;
  let currentclub = req.body.senddata.currentclub;
  console.log(currentclub);
  connection.query(
    `insert into sns (club,message) values (?,?);`,
    [currentclub, message],
    (error, results) => {
      if (error) {
        throw error;
      }
    },
  );
  res.end();
});
app.post(`/:user/dm`, (req, res) => {
  let messages;
  console.log(req.body);
  connection.query(
    `select * from dm where user = ? and club = ?`,
    [req.params.user,req.body.dmdata.club],
    (error, results) => {
      if (error) {
        throw error;
      } else {
        res.json(results);
      }
    },
  );
});
app.post("/:user/:club/senddm",(req,res)=>{
  let postdm = req.body.postdmdata;
  connection.query(
    'insert into dm (user,club,message) values (?,?,?);',
    [req.params.user,req.params.club,postdm.message],
    (error,results)=>{
      if(error){
        throw error;
      }else{
        res.json(results);
      }
    }
  )
})
app.listen(7000, () => {
  console.log("server started");
});
