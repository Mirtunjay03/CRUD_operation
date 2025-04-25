const mongoose=require('mongoose'); 
const { type } = require('os');
const student=new mongoose.Schema({
    id :{ type:Number,required:true},
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})
const studentSchema =mongoose.model('Student',student);
module.exports=studentSchema;