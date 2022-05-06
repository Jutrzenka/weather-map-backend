import * as express from "express";
import {data} from "./routes/data";

const app = express()

app.use(express.json());

app.use("/data", data)
app.get("/*", (req,res) => {
    res.json("error")
})

app.listen(3000, "localhost", () => {
    console.log("Server listen!")
})