import * as express from "express";
import {fetchSynopticData} from "../fetching";

export const data = express.Router();

interface Params {
    voivodeship: string;
}

data.get("/:voivodeship", (req, res) => {
    const { voivodeship }:Params = req.params;
    const synopticData = fetchSynopticData(voivodeship.toLowerCase());
    res.json()
})