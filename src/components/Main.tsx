import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
  Switch,
} from "react-native";

import Constants from "expo-constants";
import { RepositoryList } from "./RepositoryList";
import { Appbar } from "./Appbar";

export const Main = () => {
  return (
    <View>
      <Appbar />
      <RepositoryList/>
    </View>
  );
};
