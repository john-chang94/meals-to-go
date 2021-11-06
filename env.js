const dev = "https://bd66-2603-8001-3140-784c-f85e-2d8d-8390-c427.ngrok.io/meals-to-go-a18a6/us-central1";
const prod = "https://us-central1-meals-to-go-a18a6.cloudfunctions.net";

export const isDevelopment = process.env.NODE_ENV === "development";
export const host = isDevelopment ? dev : prod;
export const isMock = isDevelopment;