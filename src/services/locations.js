import camelize from "camelize";
import { locations } from "./mock/geocodes";

export const locationTransform = (result) => {
    const camelizedResponse = camelize(result); // Adding camelize incase google api adds more stuff
    const { geometry = {} } = camelizedResponse.results[0]; // geometry set to empty obj as default
    const { lat, lng } = geometry.location;

    return { lat, lng };
}

export const locationRequest = (search) => {
    return new Promise((resolve, reject) => {
        const locationMock = locations[search];
        if (!locationMock) {
            reject("Not found");
        }
        resolve(locationMock);
    })
}