import React from "react";
import { StyledView } from "../styled-components/StyledView";
import { StyledText } from "../styled-components/StyledText";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { theme } from "../themes/theme";
import { AppbarTabType } from "../types/appbarTypes";

export const AppbarTab: React.FC<AppbarTabType> = ({ children, to }) => {
  return (
      <StyledText title white semibold>{children}</StyledText>
  );
};

export const Appbar = () => {
  return (
    <View style={styles.container}>
      <AppbarTab to="/">Repositories</AppbarTab>
      <AppbarTab to="/signin">Signin</AppbarTab>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight - 5,
    paddingBottom: 10,
    backgroundColor: theme.colors.primaryVariant,
    flexDirection: "row",
    verticalAlign: "middle",
    paddingHorizontal: 12,
    justifyContent: "space-between"
  },
});
