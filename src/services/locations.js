import axios from "axios";
import camelize from "camelize";
import { host, isMock } from "../../env";

export const locationTransform = (result) => {
  const camelizedResponse = camelize(result); // Adding camelize incase google api adds more stuff
  const { geometry = {} } = camelizedResponse[0]; // geometry set to empty obj as default
  const { lat, lng } = geometry.location;
  
  return { lat, lng, viewport: geometry.viewport };
};

export const locationRequest = async (search) => {
  try {
    const res = await axios.get(
      `${host}/geocode?city=${search}&mock=${isMock}`
      );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
