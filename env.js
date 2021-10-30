const dev = "https://cf33-2603-8001-3140-784c-fc28-d118-35ee-9627.ngrok.io/meals-to-go-a18a6/us-central1";
const prod = "https://us-central1-meals-to-go-a18a6.cloudfunctions.net";

export const isDevelopment = process.env.NODE_ENV === "development";
export const host = process.env.NODE_ENV === isDevelopment ? dev : prod;

const key = "AIzaSyBqzFS0-nPJgA0xTVOW7enjzVOHqLkiMk0"