import React from "react";
import { CreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout";

export default function CreditCard({ name, onSuccess, onError }) {
  const onChange = async (formData) => { // formData is from RN-CreditCardInput
    const { values, status } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    const card = {
      number: values.number,
      exp_month: values.expiry.split("/")[0],
      exp_year: values.expiry.split("/")[1],
      cvc: values.cvc,
      name: name,
    };
    if (!isIncomplete) {
      try {
        const info = await cardTokenRequest(card);
        onSuccess(info);
      } catch (err) {
        onError();
      }
    }
  };

  return <CreditCardInput onChange={onChange} />;
}
