import express from "express";
import cors from "cors";

import fs from "fs";
const app = express();

const data = JSON.parse(fs.readFileSync("data.json"));
app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET"
}));


app.use(express.json());

app.get("/api",(req,res)=>{

    res.send(data);
})

app.post("/api",(req,res)=>{
    const {name}= req.body;
    data.push(name);
    res.send({success:true,data})
})

app.listen("5000",(req,res)=>{

    console.log("Server running on port 5000");
})