# Data format application from https://danepubliczne.imgw.pl
# Live Version: https://weather-app-backend-kacper.herokuapp.com/data/mazo
## Endpoints:
- doln -> województwo Dolnośląskie
- kuja -> województwo Kujawsko-Pomorskie
- lube -> województwo Lubelskie
- lubu -> województwo Lubuskie
- lodz -> województwo Łódzkie
- malo -> województwo Małopolskie
- mazo -> województwo Mazowieckie
- opol -> województwo Opolskie
- podk -> województwo Podkarpackie
- podl -> województwo Podlaskie
- pomo -> województwo Pomorskie
- slas -> województwo Śląskie
- swie -> województwo Świętokrzyskie
- warm -> województwo Warmińsko-mazurskie
- wiel -> województwo Wielkopolskie
- zach -> województwo Zachodniopomorskie

## Status code:
- 200 -> OK
- 404 -> Data is not found

## Request format:
[protocol]/[host]/data/[endpoint]

e.g

http://localhost:3000/data/zach

## Response format:
### "error":boolean;
### "synopticData":[ city:string, temp:number, windSpeed:number, "totalPrecipitation":number, "atmosphericPressure": number]
### "hydroData": ["city": string,"river": string, "waterHeight": number]
