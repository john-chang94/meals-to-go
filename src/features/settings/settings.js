import React, { useContext } from "react";
import styled from "styled-components";

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
  const { user, onSignOut } = useContext(AuthContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={120} icon="human" backgroundColor="#2182BD" />
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
