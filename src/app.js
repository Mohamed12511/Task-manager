const express=require('express');
const app=express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.text());
const DBConnection=require('./config/db');
const route=require('./routes/api_routes');
app.use(express.static('./public'));
app.use('/api',route);  

const Sensitive_Info=require('./config/server_confing');

const Port=Sensitive_Info.PORT;

const startServer = async () => {
    try {
        await DBConnection(); // connect to DB
        console.log("Database connected");
        app.listen(Port, () => console.log(`Server is running on port ${Port}.....`));
    } catch (err) {
        console.error("DB connection failed:", err);
    }
};

startServer();