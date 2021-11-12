import React, { useContext, useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import CreditCard from "../components/creditCard";
import { CartIconContainer } from "../components/checkoutStyles";
import { CartIcon } from "../components/checkoutStyles";
import RestaurantInfoCard from "../../restaurants/components/restaurantInfoCard";

import { Text } from "../../../components/text";
import { SafeArea } from "../../../components/safeArea";

import { CartContext } from "../../../contexts/cartContext";
import Spacer from "../../../components/spacer";

export default function CheckoutScreen() {
  const { cart, restaurant, sum } = useContext(CartContext);

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CartIconContainer>
          <CartIcon icon="cart-off" />
          <Text>Your cart is empty.</Text>
        </CartIconContainer>
      </SafeArea>
    );
  }

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="medium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map((item) => {
              return <List.Item title={`${item.item} - ${item.price / 100}`} />;
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <CreditCard />
      </ScrollView>
    </SafeArea>
  );
}
