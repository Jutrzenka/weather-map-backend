import {VoivodeshipKeys} from "./VoivodeshipKeys";
import * as express from "express";
import {fetchHydroData, fetchSynopticData} from "./fetching";

export const sendResponse = async (voivodeshipKey:VoivodeshipKeys | undefined, res:express.Response) => {
    if (voivodeshipKey !== undefined) {
        const synopticData = await fetchSynopticData(voivodeshipKey);
        const hydroData = await fetchHydroData(voivodeshipKey);
        res.status(200)
        res.json({error: false, synopticData, hydroData})
    } else {
        res.status(404);
        res.json({error: true})
    }
}