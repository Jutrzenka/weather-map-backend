import express from "express";
import { config } from "./config";
import {data} from "./routes/data";

const app = express()

app.use(express.json());

app.use("/data", data)
app.get("/*", (req,res) => {
    res.status(404);
    res.json({error: true})
})

app.listen(config.port, config.host, () => {
    console.log(`Server listen to: http://${config.host}:${config.port}`);
})