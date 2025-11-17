class TaskService{
    constructor(repo){
        this.repo=repo;
    }

    async CreateTask(Task){
        const Data=await this.repo.CreateTask(Task.name,Task.completed);
        return Data;
    }
    async getTasks(){
        const Data=await this.repo.getTasks();
        return Data;
    }
    async getTask(id){
        const Data=await this.repo.getTask(id);
        return Data;
    }
     async DeleteTask(id){
        const Data=await this.repo.DeleteTask(id);
        return Data;
    }

    async UpdateTask(req){
        const Data=await this.repo.UpdateTask(req);
        return Data;
    }

};

module.exports={TaskService};