const express=require('express');
const route=express.Router();
const v1Route=require('./v1/index');

route.use('/v1',v1Route);

module.exports=route;
