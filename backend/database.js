const mongoose = require('mongoose');
async function dbConn(){
    const conn=await mongoose.connect('mongodb://localhost:27017/studentapp');
    if(conn){
        console.log('Database connected successfully');
    }
    else{
        console.log('Database connection failed');
    }   
}
module.exports=dbConn;