import createStripe from "stripe-client";
import axios from "axios";
import { host } from "../../env";

const stripe = createStripe("pk_test_pVR6XdYSg9PfLktjwSlm4cOV");

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = async (token, amount, name) => {
    try {
        const body = { token, amount, name };
        const res = await axios.post(`${host}/pay`, body);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}