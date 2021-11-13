import React, { useContext, useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import CreditCard from "../components/creditCard";
import { CartIconContainer } from "../components/checkoutStyles";
import { CartIcon } from "../components/checkoutStyles";
import { NameInput } from "../components/checkoutStyles";
import { PayButton } from "../components/checkoutStyles";
import { ClearButton } from "../components/checkoutStyles";
import RestaurantInfoCard from "../../restaurants/components/restaurantInfoCard";

import { Text } from "../../../components/text";
import { SafeArea } from "../../../components/safeArea";

import { CartContext } from "../../../contexts/cartContext";
import Spacer from "../../../components/spacer";

export default function CheckoutScreen() {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");

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
      <ScrollView>
        <RestaurantInfoCard restaurant={restaurant} />
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
        <NameInput
          label="name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Spacer position="top" size="large">
          <CreditCard name={name} />
        </Spacer>
        <Spacer position="top" size="xl"></Spacer>
        <PayButton icon="cash-usd" mode="contained" onPress={() => console.log("pressed")}>Pay</PayButton>
        <Spacer position="top" size="large">
          <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>Clear cart</ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
}
