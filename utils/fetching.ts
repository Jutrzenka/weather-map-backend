import {VoivodeshipKeys} from "./VoivodeshipKeys";

const filterCity = (value: any, voivodeshipKeys:VoivodeshipKeys) => {
    return voivodeshipKeys.city.includes(value["stacja"]);
}

interface SynopticData {
    city: string;
    temp: number;
    windSpeed: number;
    totalPrecipitation: number;
    atmosphericPressure: number;
}

export const fetchSynopticData = async (voivodeshipKeys:VoivodeshipKeys) => {
    const data = (await (await fetch("http://danepubliczne.imgw.pl/api/data/synop/")).json()) as [];
    return data.filter(value => filterCity(value, voivodeshipKeys))
        .map(value => {
            return {
                city: value["stacja"],
                temp: value["temperatura"],
                windSpeed: value["predkosc_wiatru"],
                totalPrecipitation: value["suma_opadu"],
                atmosphericPressure: value["cisnienie"],
            } as SynopticData;
        })
}

interface HydroData {
    city: string;
    river: string;
    waterHeight: number;
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
                waterHeight: value["stan_wody"],
            } as HydroData;
    })
}