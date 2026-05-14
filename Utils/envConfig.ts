const env = {

    prod: "https://x-med.in/",
    uat: "https://x-med.in/",
    dev: "https://x-med.in/"
};

const ENV = (process.env.ENV || "uat").toLowerCase();

export const baseURL = env[ENV as keyof typeof env];

console.log("ENV =", ENV);

console.log("BASE URL =", baseURL); ///