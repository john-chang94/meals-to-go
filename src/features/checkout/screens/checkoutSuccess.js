import React from "react";

import { CartIconContainer, CartIcon } from "../components/checkoutStyles";

import { Text } from "../../../components/text";
import { SafeArea } from "../../../components/safeArea";
import Spacer from "../../../components/spacer";

export default function CheckoutSuccessScreen() {
  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="check-bold" />
        <Text variant="label">Success!</Text>
      </CartIconContainer>
    </SafeArea>
  );
}
