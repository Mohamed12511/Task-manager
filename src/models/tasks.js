
const mongoo=require('mongoose');
const TaskSchema=new mongoo.Schema({
    name:{type:String,required:true,maxlength:20,minlength:5,trim:true},
    completed:{type:Boolean,default:false}
},{timestamps:false,versionKey:false});


module.exports=mongoo.model('Task',TaskSchema);