import * as express from "express";
import {fetchHydroData, fetchSynopticData} from "../utils/fetching";
import {getVoivodeshipKeys} from "../utils/VoivodeshipKeys";

export const data = express.Router();

interface Params {
    voivodeshipName: string;
}

data.get("/:voivodeshipName", async (req, res) => {
    const { voivodeshipName }:Params = req.params;
    const voivodeshipKey = getVoivodeshipKeys(voivodeshipName);
    if (voivodeshipKey !== undefined) {
        const synopticData = await fetchSynopticData(voivodeshipKey);
        const hydroData = await fetchHydroData(voivodeshipKey);
        res.status(200)
        res.json({error: false, synopticData, hydroData})
    } else {
        res.status(404);
        res.json({error: true})
    }
})