//database connection
//import mongoose
const mongoose =require('mongoose')
//connection string to connect db with server 
mongoose.connect('mongodb://localhost:27017/remindApp',{useNewUrlParser:true})

//create model
const Reminduser=mongoose.model('Reminduser',{

    uname:String,
    password:String,
    mobile:Number,
    event:[]
  
    
})
module.exports={
   Reminduser
}