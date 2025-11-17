// Five Controllers 
const {TasksRepository}=require('../repositories/tasks_repository');
const {TaskService}=require('../services/tasks_service');
const TaskServices=new TaskService(new TasksRepository);
async function CreateTask(req,res){
    try{
    const response=await TaskServices.CreateTask(req.body);
    return res.status(201).json({
         succes:true,
         error:{},
         message:"Successfully added the task",
         data:response
    })
    }
    catch(err){
        return res.status(500).json({msg:err});
        console.log("Mistake",err);
    }
};

async function getTasks(req,res){
    try{
        const response=await TaskServices.getTasks();
        return res.status(200).json({
            success:true,
            error:{},
            message:"Successfully got all tasks",
            data:response
        })
    }catch(err){
        return res.status(500).json({msg:err});
    }
};

async function getTask(req,res){
     try{
     const response=await TaskServices.getTask(req.params.id);
     if(!response)throw Error("Enter Correct ID Please");
        return res.status(200).json({
            success:true,
            error:{},
            message:"Successfully got the task",
            data:response
        })
    }catch(err){
        return res.status(404).json({msg:err.message});
    }
};

async function DeleteTask(req,res){
    try{
        const response=await TaskServices.DeleteTask(req.params.id);
          if(!response)throw Error("Enter Correct ID Please");
        return res.status(201).json({
            success:true,
            error:{},
            message:"Successfully got all tasks",
            data:response
        })
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
};

async function UpdateTask(req,res){
    try{
        const response=await TaskServices.UpdateTask(req);
          if(!response)throw Error("Enter Correct ID Please");
        return res.status(201).json({
            success:true,
            error:{},
            message:"Successfully got all tasks",
            data:response
        })
    }catch(err){
        return res.status(500).json({msg:err.message});
    }
};


module.exports={CreateTask,getTasks,getTask,DeleteTask,UpdateTask};