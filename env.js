const dev = "https://cf33-2603-8001-3140-784c-fc28-d118-35ee-9627.ngrok.io/meals-to-go-a18a6/us-central1";
const prod = "https://us-central1-meals-to-go-a18a6.cloudfunctions.net";

export const isDevelopment = process.env.NODE_ENV === "development";
<<<<<<< HEAD
export const host = process.env.NODE_ENV === isDevelopment ? dev : prod;
=======
export const host = process.env.NODE_ENV === isDevelopment ? dev : prod;
>>>>>>> e2ad7880ea887dfea5e27674446deb38b29f911a
