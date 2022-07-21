import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

console.log(StatusBar.currentHeight);

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
