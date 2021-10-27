import axios from "axios";
import camelize from "camelize";
import { locations } from "./mock/geocodes";

export const locationTransform = (result) => {
    const camelizedResponse = camelize(result); // Adding camelize incase google api adds more stuff
    const { geometry = {} } = camelizedResponse.results[0]; // geometry set to empty obj as default
    const { lat, lng } = geometry.location;

    return { lat, lng, viewport: geometry.viewport };
}

// export const locationRequest = (search) => {
//     return new Promise((resolve, reject) => {
//         const locationMock = locations[search];
//         if (!locationMock) {
//             reject("Not found");
//         }
//         resolve(locationMock);
//     })
// }

export const locationRequest = async (search) => {
    // const res = await axios.get(`http://9f48-2603-8001-3140-784c-fc28-d118-35ee-9627.ngrok.io/meals-to-go-a18a6/us-central1/geocode?city=${search}`);
    // console.log(res.data)
    // return res;

    return fetch(
        `http://9f48-2603-8001-3140-784c-fc28-d118-35ee-9627.ngrok.io/meals-to-go-a18a6/us-central1/geocode?city=${search}`
      ).then((res) => {
          console.log(res.json())
        return res.json();
      });
}