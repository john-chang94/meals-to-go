import createStripe from "stripe-client";

const stripe = createStripe("pk_test_pVR6XdYSg9PfLktjwSlm4cOV");

export const cardTokenRequest = (card) => stripe.createToken({ card });