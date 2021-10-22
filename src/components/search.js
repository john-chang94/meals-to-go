import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../contexts/locationContext";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export default function Search({ isFavoritesToggled, setIsFavoritesToggled }) {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword])

  return (
    <SearchContainer>
      <Searchbar
        icon={isFavoritesToggled ? "heart" : "heart-outline"}
        onIconPress={setIsFavoritesToggled}
        placeholder="Search for a city..."
        value={searchKeyword}
        onChangeText={(text) => setSearchKeyword(text)}
        onSubmitEditing={() => search(searchKeyword)}
      />
    </SearchContainer>
  );
}
