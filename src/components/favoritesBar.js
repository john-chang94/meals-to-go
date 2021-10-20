import React from "react";
import styled from "styled-components";
import { ScrollView, TouchableOpacity } from "react-native";
import { Text } from "./text";

import CompactRestaurantInfo from "./compactRestaurantInfo";
import Spacer from "./spacer";

const FavoritesWrapper = styled.View`
  padding-left: 10px;
  padding-right: 10px;
`;

export default function FavoritesBar({ favorites, navigation }) {
  return (
    <FavoritesWrapper>
        <Spacer position="left" size="medium">
            <Text variant="caption">Favorites</Text>
        </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((favorite, i) => (
          <Spacer key={i} position="left" size="medium">
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: favorite,
                })
              }
            >
              <CompactRestaurantInfo restaurant={favorite} />
            </TouchableOpacity>
          </Spacer>
        ))}
      </ScrollView>
    </FavoritesWrapper>
  );
}
