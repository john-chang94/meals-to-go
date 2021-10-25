import React, { useContext } from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { FavoritesContext } from "../../contexts/favoritesContext";
import { RestaurantsContext } from "../../contexts/restaurantsContext";

import { SafeArea } from "../../components/safeArea";
import { Text } from "../../components/text";
import Spacer from "../../components/spacer";
import { RestaurantList } from "../../components/restaurantList";
import RestaurantInfoCard from "../restaurants/components/restaurantInfoCard";

const NoFavoritesContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeArea>
      <RestaurantList
        data={favorites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { restaurant: item })
            }
          >
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavoritesContainer>
      <Text>No favorites yet</Text>
    </NoFavoritesContainer>
  );
}
