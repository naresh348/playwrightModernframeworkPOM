const env={
    qa:"https://x-med.in/",
    prod:"https://x-med.in/",
    dev:"https://x-med.in/",
    stage:"https://x-med.in/" 
}

const ENV=process.env.ENV || "prod"
export const BASE_URL = (env as any)[ENV]