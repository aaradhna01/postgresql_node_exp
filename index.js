import express from "express";
import { connection } from "./postgres/postgres.js";
import router from './view/routes.js';
import cors from 'cors'

const app=express();

const PORT=8000;

app.use (router)
app.use(express.json());
app.use(cors());


app.listen(PORT,()=>{
    console.log(`server is running at PORT ${PORT}`)
});

connection();
 
