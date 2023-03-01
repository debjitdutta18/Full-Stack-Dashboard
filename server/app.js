require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
app.use(cors());
const fs = require('fs')

const PORT = process.env.PORT || 5000;

const entries_routes = require("./routes/entries");

app.get("/",(req,res) => {
    res.send("HI I AM LIVE");
});

//middleware to set router
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
// app.use(bodyParser.json());
app.use("/",entries_routes)

const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am Connected`);
        });
    }catch(error){
        console.log(error);
    }
}



start();










