import express from "express";
import {config, } from "./config";
import {data, } from "./routes/data";
import cors from 'cors';

const app = express()

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());

app.use("/data", data)
app.get("/*", (req,res) => {
    res.status(404);
    res.json({error: true})
})

app.listen(config.port,() => {
    console.log(`Server listen to port: ${config.port}`);
})