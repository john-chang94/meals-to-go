import styled from "styled-components";
import { FlatList } from "react-native";

export const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
      // We can also include this inline with the component instead of using 'attrs'
      padding: 16,
    },
  })`
    margin-bottom: ${(props) => props.theme.space[0]};
  `;