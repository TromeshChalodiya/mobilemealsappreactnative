import React, { useContext, useState } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../components/services/authentication/auth.context";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  top: 30px;
`;

const AvatarContainer = styled.View`
  top: 30px;
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onSignOut, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      const getProfilePicture = async (currentUser) => {
        try {
          const photoUri = await AsyncStorage.getItem(
            `${currentUser.uid}-photo`
          );
          setPhoto(photoUri);
        } catch (e) {
          console.log(e);
        }
      };
      getProfilePicture(user);

      return () => null;
    }, [user])
  );

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon
              size={140}
              icon="human"
              backgroundColor={colors.brand.primary}
            />
          )}
          {photo && (
            <Avatar.Image
              size={140}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          // eslint-disable-next-line react/no-unstable-nested-components
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={onSignOut}
        />
      </List.Section>
    </SafeArea>
  );
};
