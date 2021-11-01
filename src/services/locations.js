import axios from "axios";
import camelize from "camelize";
import { host } from "../../env";

export const locationTransform = (result) => {
    const camelizedResponse = camelize(result); // Adding camelize incase google api adds more stuff
    const { geometry = {} } = camelizedResponse.results[0]; // geometry set to empty obj as default
    const { lat, lng } = geometry.location;

    return { lat, lng, viewport: geometry.viewport };
}

export const locationRequest = async (search) => {
    const res = await axios.get(`${host}/geocode?city=${search}`);
    console.log(res.data)
    return res.data;
}