const express=require('express');
const route=express.Router();
const {CreateTask,getTasks,getTask,DeleteTask,UpdateTask}=require('../../controllers/tasks');

route.post('/',CreateTask);
route.get('/',getTasks);
route.get('/:id',getTask);
route.delete('/:id',DeleteTask);
route.patch('/:id',UpdateTask)
module.exports=route;