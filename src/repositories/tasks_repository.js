const TasksModel=require('../models/tasks');

class TasksRepository{
    async CreateTask(name,completed){
        try{
            const Data=await TasksModel.create({name,completed});
            return Data;
        }
        catch(err){
            console.log("There is a mistake",err);
        }
    }
    async getTasks(){
        try{
            const Data=await TasksModel.find();
            return Data;
        }catch(err){
            console.log("There is a Error",err);
        }
    }
    async getTask(id){
        try{
            const Data=await TasksModel.findById(id);
            return Data;
        }
        catch(err){
            console.log("There is a Error",err);
        }
    }
    async DeleteTask(id){
         try{
            const Data=await TasksModel.deleteOne({_id:id});
            return Data;
        }
        catch(err){
            console.log("There is a Error",err);
        }
    }
    async UpdateTask(req){
         try{
            const Data=await TasksModel.findById(req.params.id);
            if(!Data)throw new Error("The id not found");
           const updatedFields={
            name:req.body.name??Data.name,
            completed:req.body.completed??Data.completed
            };
            const newData=await TasksModel.updateOne({_id:req.params.id},
                {$set:{name:updatedFields.name,completed:updatedFields.completed}});

            return newData;
        }
        catch(err){
            console.log("There is a Error",err.message);
        }
    }
}

module.exports={TasksRepository};