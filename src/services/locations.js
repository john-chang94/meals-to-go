import axios from "axios";
import camelize from "camelize";
import { host } from "../../env";

export const locationTransform = (result) => {
  const camelizedResponse = camelize(result); // Adding camelize incase google api adds more stuff
  const { geometry = {} } = camelizedResponse.results[0]; // geometry set to empty obj as default
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};

export const locationRequest = async (search) => {
  try {
    const res = await axios.get(
      `https://167e-2603-8001-3140-784c-f85e-2d8d-8390-c427.ngrok.io/meals-to-go-a18a6/us-central1/geocode?city=${search}&mock=true`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
