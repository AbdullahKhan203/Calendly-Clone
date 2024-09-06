import Nylas from "nylas";

export const nylasConfig = {
    clientId: process.env.NYLAS_CLIENT_ID,
    callbackUri: "http://localhost:3000/api/oauth/exchange",
    apiKey: process.env.NYLAS_API_KEY,
    apiUri: process.env.NYLAS_API_URI,
  };
  
 export const nylas = new Nylas({
    apiKey: nylasConfig.apiKey,
    apiUri: nylasConfig.apiUri, // "https://api.us.nylas.com" or "https://api.eu.nylas.com"
  });


  