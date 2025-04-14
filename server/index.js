import dotenv from 'dotenv';
import express from "express";
import router from "./router/auth-router.js"
import connectDb from "./utils/db.js";

dotenv.config();
const app=express();

app.use(express.json());
app.use("/api/auth", router);

const PORT=8000;

connectDb().then(() => {
    app.listen(PORT,()=>{
        console.log(`server is running on port:${PORT}`);
    })
});

