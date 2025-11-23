import express from "express";
import cors from "cors";
const app = express();
const data=["moon","bilal","Saad"];
app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET"
}))


app.get("/api",(req,res)=>{

    res.send(data);
})
app.listen("5000",(req,res)=>{

    console.log("Server running on port 5000");
})