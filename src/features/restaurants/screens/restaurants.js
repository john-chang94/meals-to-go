import React, { useState, useContext } from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { LocationContext } from "../../../contexts/locationContext";
import { RestaurantsContext } from "../../../contexts/restaurantsContext";
import { FavoritesContext } from "../../../contexts/favoritesContext";
import { SafeArea } from "../../../components/safeArea";
import FadeInView from "../../../components/fadeAnimation";

import RestaurantInfoCard from "../components/restaurantInfoCard";
import { RestaurantList } from "../../../components/restaurantList";
import { Text } from "../../../components/text";
import Spacer from "../../../components/spacer";
import Search from "../../../components/search";
import FavoritesBar from "../../../components/favoritesBar";

const Loader = styled(ActivityIndicator)`
  margin-top: 100px;
`;

export default function RestaurantsScreen({ navigation }) {
  const [isFavoritesToggled, setIsFavoritesToggled] = useState(false);
  const { error: locationError } = useContext(LocationContext);
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const hasError = !!error || !!locationError;

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
      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">
            Uh oh! Something went wrong. Try searching again.
          </Text>
        </Spacer>
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
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </Spacer>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
