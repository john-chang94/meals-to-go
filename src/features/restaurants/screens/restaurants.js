import React, { useState, useContext } from "react";
import styled from "styled-components";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantsContext } from "../../../services/restaurantsContext";
import { FavoritesContext } from "../../../services/favoritesContext";
import { SafeArea } from "../../../components/safeArea";

import RestaurantInfoCard from "../components/restaurantInfoCard";
import Spacer from "../../../components/spacer";
import Search from "../../../components/search";
import FavoritesBar from "../../../components/favoritesBar";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    // We can also include this inline with the component instead of using 'attrs'
    padding: 16,
  },
})`
  margin-bottom: ${(props) => props.theme.space[0]};
`;

const Loader = styled(ActivityIndicator)`
  margin-top: 100px;
`;

export default function Restaurants({ navigation }) {
  const [isFavoritesToggled, setIsFavoritesToggled] = useState(false);
  // navigation comes from stack navigator
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);

  return (
    <SafeArea>
      <Search
        isFavoritesToggled={isFavoritesToggled}
        setIsFavoritesToggled={() => setIsFavoritesToggled(!isFavoritesToggled)}
      />
      {isFavoritesToggled && (
        <FavoritesBar favorites={favorites} navigation={navigation} />
      )}
      {isLoading && (
        <Loader animating={true} size={50} color={Colors.blue300} />
      )}
      <RestaurantList
        data={restaurants}
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
  );
}
