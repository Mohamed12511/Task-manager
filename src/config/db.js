const mongoose = require('mongoose');

const Sensitive_Info=require('./server_confing');

const MONGO_URI=Sensitive_Info.MONGO_URI;
const ConnectionDB=()=>mongoose.connect(MONGO_URI);;
module.exports=ConnectionDB;