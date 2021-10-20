import React from "react";
import CompactRestaurantInfo from "../../../components/compactRestaurantInfo";

export default function MapCallout({ restaurant }) {
    return (
        <CompactRestaurantInfo isMap restaurant={restaurant} />
    )
}