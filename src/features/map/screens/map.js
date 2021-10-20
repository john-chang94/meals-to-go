import React, { useState, useEffect, useContext } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";

import { LocationContext } from "../../../services/locationContext";
import { RestaurantsContext } from "../../../services/restaurantsContext";

import MapSearch from "../components/mapSearch";
import MapCallout from "../components/mapCallout";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export default function MapScreen({ navigation }) {
  const [latdelta, setLatDelta] = useState(0);

  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    // latitude delta determines how close the zoom level is on the map
    const latDelta = northeastLat - southwestLat;
    setLatDelta(latDelta);
  }, [location, viewport]);

  return (
    <>
      <MapSearch />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latdelta,
          longitudeDelta: 0.02, // Default zoom level that we want
        }}
      >
        {restaurants.map((restaurant, i) => {
          return (
            <MapView.Marker
              key={i}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: restaurant, // Sending route params for RestaurantDetail component
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
}
