import React from "react";

import { CartIconContainer, CartIcon } from "../components/checkoutStyles";

import { Text } from "../../../components/text";
import { SafeArea } from "../../../components/safeArea";
import { colors } from "../../../theme/colors";
import Spacer from "../../../components/spacer";

export default function CheckoutErrorScreen({ route }) {
  const { error } = route.params;

  return (
    <SafeArea>
      <CartIconContainer>
        <CartIcon icon="close" bg={colors.ui.error} />
        <Text variant="label">{error}</Text>
      </CartIconContainer>
    </SafeArea>
  );
}
