import 'dotenv/config';

const getEnv = (data:string) => {
    const env = process.env[`${data}`];
    if (env === undefined){
        throw new Error(`${data} in .env is not found`);
    } else {
        if (env === ""){
            throw new Error(`Empty string ${data} in ENV`);
        }
        return env;
    }
}

export const config = {
    port: Number(getEnv("PORT")),
    host: getEnv("HOST"),
}