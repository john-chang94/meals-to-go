import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/core";

import { List, Avatar } from "react-native-paper";

import { SafeArea } from "../../components/safeArea";
import { Text } from "../../components/text";
import Spacer from "../../components/spacer";
import { AuthContext } from "../../contexts/authContext";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-top: 8px;
`;

export default function SettingsScreen({ navigation }) {
  const [photo, setPhoto] = useState(null);
  const { user, onSignOut } = useContext(AuthContext);

  const getProfilePicture = async (user) => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
    setPhoto(photoUri);
  };

  // Runs each time the screen gets back into focus (or when user changes)
  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      getProfilePicture(user);

      return () => isActive = false;
    }, [user])
  )

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {photo ? (
            <Avatar.Image size={120} source={{ uri: photo }} backgroundColor="#2182BD" />
          ) : (
            <Avatar.Icon size={120} icon="human" backgroundColor="#2182BD" />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="caption">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          title="Sign out"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onSignOut}
        />
      </List.Section>
    </SafeArea>
  );
}
