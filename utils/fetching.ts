import {VoivodeshipKeys} from "./VoivodeshipKeys";

export const fetchSynopticData = async (voivodeshipKeys:VoivodeshipKeys) => {
    return voivodeshipKeys;
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