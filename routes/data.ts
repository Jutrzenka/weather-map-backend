import * as express from "express";

export const data = express.Router();

data.get("/synoptic/:voivodeship", (req, res) => {
    res.json(req.params)
})

data.get("/hydrological/:voivodeship", (req, res) => {
    res.json(req.params)
})