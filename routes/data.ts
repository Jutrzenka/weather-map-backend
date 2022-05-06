import * as express from "express";
import { sendResponse } from "../utils/sendResponse";
import {getVoivodeshipKeys} from "../utils/VoivodeshipKeys";

export const data = express.Router();

interface Params {
    voivodeshipName: string;
}

data.get("/:voivodeshipName", async (req, res) => {
    const { voivodeshipName }:Params = req.params;
    const voivodeshipKey = getVoivodeshipKeys(voivodeshipName);
    await sendResponse(voivodeshipKey, res);
})