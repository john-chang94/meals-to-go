import React, { useContext } from "react";
import CreditCard from "../components/creditCard";

import { Text } from "../../../components/text";
import { SafeArea } from "../../../components/safeArea";

import { CartContext } from "../../../contexts/cartContext";

export default function CheckoutScreen() {
  const { cart, restaurant } = useContext(CartContext);

  return (
    <SafeArea>
      <Text>{JSON.stringify(cart)}</Text>
      <Text>{JSON.stringify(restaurant)}</Text>
      <CreditCard />
    </SafeArea>
  );
}
