import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

import { colors } from "../../../infrastructure/theme/colors";
import { AuthenticationContext } from "../../../components/services/authentication/auth.context";

const ProfileCamera = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const PickButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let photo = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(photo);

    if (!photo.cancelled) {
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  return (
    <ProfileCamera>
      <TouchableOpacity onPress={pickImage}>
        <PickButton
          title="Pick an image from camera roll"
          onPress={pickImage}
        />
      </TouchableOpacity>
    </ProfileCamera>
  );
};
