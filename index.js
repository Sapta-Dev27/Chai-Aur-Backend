require('dotenv').config()
const express = require("express") ;

const app = express() ;
const port = process.env.port ;

app.get("/" , (req,res) => {
  res.send("From the Home Page")
})

app.get("/profile" , (req,res) => {
  res.send("This is a Profile Page");
})

app.get("/login" , (req,res) => {
  res.send("<h1>Login To Your Profile</h1>")
})

app.get("/signup" , (req,res) => {
  res.send("<h3>Create Your Own Account</h3>")
})

const data = [
  {
    id: 1 ,
    firstName  : " Anuska" ,
    secondName : " Biswas " 
  },
  {
    id: 2 ,
    firstName  : " Anuska" ,
    secondName : " Biswas " 
  },
  {
    id: 3 ,
    firstName  : " Anuska" ,
    secondName : " Biswas " 
  },
  {
    id: 4 ,
    firstName  : " Anuska" ,
    secondName : " Biswas " 
  },
  {
    id: 5 ,
    firstName  : " Anuska" ,
    secondName : " Biswas " 
  }
]

app.get("/data" , (req, res) => {
  res.json(data);
})


app.listen(port , () => {
  console.log(`The Server had started at port ${port}`)
})