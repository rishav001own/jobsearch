require('dotenv').config()
const express = require('express');
const BodyParser = require("body-parser");
const cors = require('cors');
const port =process.env.PORT || 1010;
const MongoClient = require("mongodb").MongoClient;
const url=process.env.MONGODBURI;
const mongoOptions = {useNewUrlParser : true,useUnifiedTopology: true};

const app = express();
app.use(BodyParser.json());
app.use(cors());
app.use(BodyParser.urlencoded({ extended: true }));

app.post('/createjob',(req,res)=>{
    MongoClient.connect(url,mongoOptions, function(err, db) {
        if (err) throw err;
        var dbo = db.db("dbjob");
        var myobj =req.body;
        dbo.collection("createjob").insertOne(myobj, function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result)
          db.close();
        });
      });
})

app.get('/jobdashboard',(req,res)=>{
    MongoClient.connect(url,mongoOptions, function(err, db) {
        if (err) throw err;
        var dbo = db.db("dbjob");
        dbo.collection("createjob").find().toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.send(result)
          db.close();
        });
      });
})





app.listen(port,()=>console.log(`server in running on port ${port}`))
