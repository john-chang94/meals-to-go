import React, { useContext } from "react";
import styled from "styled-components";
import { FlatList } from "react-native";

import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../components/safeArea";
import RestaurantInfoCard from "../components/restaurantInfoCard";
import Spacer from "../../../components/spacer";
import { RestaurantsContext } from "../../../services/restaurantsContext";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  margin-bottom: ${(props) => props.theme.space[0]};
`;

export default function RestaurantScreen() {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  console.log(error);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
