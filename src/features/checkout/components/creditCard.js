import React from "react";
import { CreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout";

export default function CreditCard({ name }) {
    const onChange = async (formData) => {
        const { values, status } = formData;
        const isIncomplete = Object.values(status).includes("incomplete");
        const card = {
            number: values.number,
            exp_month: values.expiry.split("/")[0],
            exp_year: values.expiry.split("/")[1],
            cvc: values.cvc,
            name: name
        };
        const cardInfo = await cardTokenRequest(card);
        console.log(cardInfo)
    }

    return (
        <CreditCardInput
            onChange={onChange}
        />
    )
}