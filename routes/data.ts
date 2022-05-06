import * as express from "express";
import {fetchHydroData, fetchSynopticData} from "../utils/fetching";

export const data = express.Router();

interface Params {
    voivodeship: string;
}

data.get("/:voivodeship", async (req, res) => {
    const { voivodeship }:Params = req.params;
    const synopticData = await fetchSynopticData({city:["Białystok"], voivodeship:voivodeship});
    const hydroData = await fetchHydroData({city:["Białystok"], voivodeship:voivodeship});
    res.json({synopticData, hydroData})
})