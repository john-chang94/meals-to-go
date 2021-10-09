import React from "react";
import styled from "styled-components";
import { FlatList } from "react-native";

import { Searchbar } from "react-native-paper";
import { SafeArea } from "../../../components/safeArea";
import RestaurantInfoCard from "../components/restaurantInfoCard";
import Spacer from "../../../components/spacer";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  margin-bottom: ${(props) => props.theme.space[5]};
`;

export default function RestaurantScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}
