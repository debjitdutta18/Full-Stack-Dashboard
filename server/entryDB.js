require("dotenv").config();
const connectDB = require("./db/connect");
const Entry = require("./models/entry");
const EntryJson = require("./entries.json")

const start =async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await Entry.create(EntryJson);
        console.log("success");
    }catch(error){
        console.log(error);
    }
};

start();