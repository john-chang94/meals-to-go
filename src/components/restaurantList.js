import styled from "styled-components";
import { FlatList } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../theme/colors";

export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    // We can also include this inline with the component instead of using 'attrs'
    padding: 16,
  },
})`
  margin-bottom: ${(props) => props.theme.space[0]};
`;


export const OrderButton = styled(Button).attrs({
  color: colors.brand.primary
})`
  padding: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[2]};
  width: 80%;
  align-self: center;
`;