import axios from "axios";
import camelize from "camelize";

export const locationTransform = (result) => {
    const camelizedResponse = camelize(result); // Adding camelize incase google api adds more stuff
    const { geometry = {} } = camelizedResponse.results[0]; // geometry set to empty obj as default
    const { lat, lng } = geometry.location;

    return { lat, lng, viewport: geometry.viewport };
}

export const locationRequest = async (search) => {
    const res = await axios.get(`http://cf33-2603-8001-3140-784c-fc28-d118-35ee-9627.ngrok.io/meals-to-go-a18a6/us-central1/geocode?city=${search}`);
    return res.data;

    // return fetch(
    //     `https://cf33-2603-8001-3140-784c-fc28-d118-35ee-9627.ngrok.io/meals-to-go-a18a6/us-central1/geocode?city=${search}`
    //   ).then((res) => {
    //     return res.json();
    //   });
}