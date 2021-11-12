import styled from "styled-components";
import { Avatar } from "react-native-paper";

export const CartIconContainer = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`;

// 'bg' is potentially passed as a prop from checkout screen (bg="red")
export const CartIcon = styled(Avatar.Icon).attrs({
    size: 128
})`
    background-color: ${(props) => props.bg || props.theme.colors.brand.primary}
`;