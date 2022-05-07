import fetch from 'node-fetch';
import {VoivodeshipKeys} from "./VoivodeshipKeys";

// Fetch synoptic data

const filterCity = (value: any, voivodeshipKeys:VoivodeshipKeys) => {
    return voivodeshipKeys.city.includes(value["stacja"]);
}

interface SynopticData {
    city: string;
    temp: string;
    relativeHumidity: string;
    totalPrecipitation: string;
    atmosphericPressure: string;
}

export const fetchSynopticData = async (voivodeshipKeys:VoivodeshipKeys): Promise<SynopticData[]> => {
    const data = (await (await fetch("http://danepubliczne.imgw.pl/api/data/synop/")).json()) as [];
    return data.filter(value => filterCity(value, voivodeshipKeys))
        .map(value => {
            return {
                city: value["stacja"] !== null ? `${value["stacja"]}` : "BRAK DANYCH",
                temp: value["temperatura"] !== null ? `${value["temperatura"]}°C` : "BRAK DANYCH",
                relativeHumidity: value["wilgotnosc_wzgledna"] !== null ? `${value["wilgotnosc_wzgledna"]}%` : "BRAK DANYCH",
                totalPrecipitation: value["suma_opadu"] !== null ? `${value["suma_opadu"]} l/m2` : "BRAK DANYCH",
                atmosphericPressure: value["cisnienie"] !== null ? `${value["cisnienie"]}hPa` : "BRAK DANYCH",
            } as SynopticData;
        })
}

// Fetch hydro data

interface HydroData {
    city: string;
    river: string;
    waterHeight: string;
}

const filterVoivodeship = (value: any, voivodeshipKeys:VoivodeshipKeys) => {
    return value["województwo"] === voivodeshipKeys.voivodeship;
}

export const fetchHydroData = async (voivodeshipKeys:VoivodeshipKeys):Promise<HydroData[]> => {
    const data = (await (await fetch("http://danepubliczne.imgw.pl/api/data/hydro/")).json()) as [];
    return data.filter(value => filterVoivodeship(value, voivodeshipKeys))
        .map(value => {
            return {
                city: value["stacja"],
                river: value["rzeka"],
                waterHeight: value["stan_wody"] !== null ? `${value["stan_wody"]}m` : "BRAK DANYCH",
            } as HydroData;
    })
}