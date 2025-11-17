const express=require('express');
const route=express.Router();
const Tasks_Route=require('./tasks_route');


route.use('/tasks',Tasks_Route);

module.exports=route;