require('dotenv').config();

const Info={
    PORT:process.env.PORT,
    MONGO_URI:process.env.MONGO_URI||3000
};

module.exports=Info;