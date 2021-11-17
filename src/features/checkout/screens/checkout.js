import React, { useContext, useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import CreditCard from "../components/creditCard";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
  PaymentProcessing,
} from "../components/checkoutStyles";
import RestaurantInfoCard from "../../restaurants/components/restaurantInfoCard";
import { payRequest } from "../../../services/checkout";

import { Text } from "../../../components/text";
import { SafeArea } from "../../../components/safeArea";
import Spacer from "../../../components/spacer";

import { CartContext } from "../../../contexts/cartContext";

export default function CheckoutScreen({ navigation }) {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = async () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate("CheckoutError", { error: "Invalid credit card" });
      return;
    }

    try {
      const res = await payRequest(card.id, sum, name);
      if (res) {
        setIsLoading(false);
        clearCart();
        navigation.navigate("CheckoutSuccess");
      }
    } catch (err) {
      setIsLoading(false);
      navigation.navigate("CheckoutError", { error: err });
    }
  };

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
        {isLoading && <PaymentProcessing />}
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
          <CreditCard
            name={name}
            onSuccess={setCard}
            onError={() =>
              navigation.navigate("CheckoutError", {
                error: "Something went wrong processing your payment",
              })
            }
          />
        </Spacer>
        <Spacer position="top" size="xl"></Spacer>
        <PayButton
          disabled={isLoading}
          icon="cash-usd"
          mode="contained"
          onPress={onPay}
        >
          Pay
        </PayButton>
        <Spacer position="top" size="large">
          <ClearButton
            disabled={isLoading}
            icon="cart-off"
            mode="contained"
            onPress={clearCart}
          >
            Clear cart
          </ClearButton>
        </Spacer>
      </ScrollView>
    </SafeArea>
  );
}
