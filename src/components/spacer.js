import React from "react";
import styled, { useTheme } from "styled-components";

// Referring to spacing index in theme
const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3
}

const positionVariant = {
    top: "margin-top",
    right: "margin-right",
    bottom: "margin-bottom",
    left: "margin-left"
}

const getVariant = (position, size, theme) => {
    const sizeIndex = sizeVariant[size];
    const property = positionVariant[position];
    const value = theme.space[sizeIndex]

    return `${property}: ${value}`; // Finally, build the css property needed
}

const SpacerView = styled.View`
${({ variant }) => variant};
`;

// [ANDROID] Cannot directly return and render a Spacer component before app loads
// so we use a normal component and render the SpacerView with any children components
export default function Spacer({ position, size, children }) {
    const theme = useTheme();
    const variant = getVariant(position, size, theme);

    return <SpacerView variant={variant}>{children}</SpacerView>
}

Spacer.defaultProps = {
    position: "top",
    size: "small"
}