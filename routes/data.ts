import * as express from "express";
import {fetchHydroData, fetchSynopticData} from "../utils/fetching";

export const data = express.Router();

interface Params {
    voivodeship: string;
}

data.get("/:voivodeship", async (req, res) => {
    const { voivodeship }:Params = req.params;
    const synopticData = await fetchSynopticData(voivodeship.toLowerCase());
    const hydroData = await fetchHydroData(voivodeship.toLowerCase());
    res.json({synopticData, hydroData})
})