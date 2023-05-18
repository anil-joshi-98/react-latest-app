// Entry Point of Api
const express=require('express');
var path = require('path');
const app = express();
const mysql=require('mysql')
const port = 9000;
const cors = require('cors');

app.use(express.json());

module.exports = app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

//MySQL details
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'anildb',
  multipleStatements: true
});

//To get student details from the Database
app.get('/',async(req,res)=>{
  mysqlConnection.query('select * from studentdetails',(err,rows,fields)=>{
    if(!err){
      console.log(rows);
      res.send(rows);
    }
  })
})

//To delete a student detail from the Database
app.delete('/:id',(req,res)=>{
  const id=req.params.id;
  mysqlConnection.query(`delete from studentdetails where rollno=${id}`,(err,rows,fields)=>{
    if(!err){
      console.log('deleted')
      res.sendStatus(200);
    }
    else{
      res.sendStatus(404);
    }
  });
})

//To find a student detail from the Database from roll number
app.get('/getResult/:id/:name',(req,res)=>{
  mysqlConnection.query(`select * from studentdetails where rollno=${req.params.id} and name='${req.params.name}'`,(err,rows,field)=>{
    if(rows.length>0){
      console.log(rows);
      res.send(rows);
    }
    else{
      res.sendStatus(500);
    }
  })
})

//To add a student detail in the Database
app.post('/addResult',(req,res)=>{
  console.log(req.body);
  mysqlConnection.query(`insert into studentdetails values (${req.body.rollno},'${req.body.name}','${req.body.dob}',${req.body.score})`),(err,rows,field)=>{
    if(!err){
      console.log('added successfully');
    }
    else{
      console.log('error');
    }
  }
});

//To update a student detail in the Database
app.patch('/edit/:id',(req,res)=>{
  mysqlConnection.query(`update studentdetails set name='${req.body.name}' , dob='${req.body.dob}' , score=${req.body.score} where rollno=${req.params.id}`,(err,rows,field)=>{
    if(!err){
      res.sendStatus(200);
    }
    else{
      res.sendStatus(404);
    }
  })
})

app.listen(port, () => console.log(`App Running on port ${port}!`));
