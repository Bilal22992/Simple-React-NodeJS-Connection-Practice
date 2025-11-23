import express from "express";
import cors from "cors";
const app = express();

app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET"
}))


app.get("/api",(req,res)=>{

    res.send(["moon","bilal","Saad"])
})
app.listen("5000",(req,res)=>{

    console.log("Server running on port 5000");
})