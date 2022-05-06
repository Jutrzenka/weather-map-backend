export const fetchSynopticData = async (voivodeship:string) => {
    return voivodeship;
}

export const fetchHydroData = async (voivodeship:string) => {
    const data = (await (await fetch("http://danepubliczne.imgw.pl/api/data/hydro/")).json()) as [];
    return data.filter(value => {
        if (value["województwo"] === voivodeship) return value
    }).map(value => {
        return {
            city: value["stacja"],
                river: value["rzeka"],
            waterHeight: value["stan_wody"],
        };
    })
}