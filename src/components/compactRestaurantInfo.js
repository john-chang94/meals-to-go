import React from "react";
import styled from "styled-components";
import WebView from "react-native-webview"; // Display image for android in map view
import { Platform } from "react-native";
import { Text } from "./text";

const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const CompactWebView = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

const isAndroid = Platform.OS === 'android';

export default function CompactRestaurantInfo({ restaurant, isMap }) {
    // isMap to enable CompactWebView ONLY for map view, we still use an image in favorites
    const Image = (isAndroid && isMap) ? CompactWebView : CompactImage;

    return (
        <Item>
            <Image source={{ uri: restaurant.photos[0] }} />
            <Text variant="caption" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Item>
    )
}