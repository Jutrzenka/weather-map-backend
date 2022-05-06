export interface VoivodeshipKeys {
    city: string[];
    voivodeship: string;
}

export const getVoivodeshipKeys = (voivodeshipName:string):VoivodeshipKeys | undefined => {
    switch (voivodeshipName) {
        case "doln":
            return {city:["Wrocław"], voivodeship:"dolnośląskie"}
        case "kuja":
            return {city:["Bydgoszcz", "Toruń"], voivodeship:"kujawsko-pomorskie"}
        case "lube":
            return {city:["Lublin"], voivodeship:"lubelskie"}
        case "lubu":
            return {city:["Gorzów", "Zielona Góra"], voivodeship:"lubuskie"}
        case "lodz":
            return {city:["Łódź"], voivodeship:"łódzkie"}
        case "malo":
            return {city:["Kraków"], voivodeship:"małopolskie"}
        case "mazo":
            return {city:["Warszawa"], voivodeship:"mazowieckie"}
        case "opol":
            return {city:["Opole"], voivodeship:"opolskie"}
        case "podk":
            return {city:["Rzeszów"], voivodeship:"podkarpackie"}
        case "podl":
            return {city:["Białystok"], voivodeship:"podlaskie"}
        case "pomo":
            return {city:["Gdańsk"], voivodeship:"pomorskie"}
        case "slas":
            return {city:["Katowice"], voivodeship:"śląskie"}
        case "swie":
            return {city:["Kielce"], voivodeship:"świętokrzyskie"}
        case "warm":
            return {city:["Olsztyn"], voivodeship:"warmińsko-mazurskie"}
        case "wiel":
            return {city:["Poznań", "Kalisz"], voivodeship:"wielkopolskie"}
        case "zach":
            return {city:["Szczecin"], voivodeship:"zachodniopomorskie"}
        default:
            return undefined;

    }
}