const mongoose = require("mongoose");
// uri = "mongodb+srv://debjitdutta:archie2000@cluster0.omcqbq9.mongodb.net/test?retryWrites=true&w=majority" ;

mongoose.set("strictQuery", false);
const connectDB = (uri)=>{
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
}

module.exports = connectDB;