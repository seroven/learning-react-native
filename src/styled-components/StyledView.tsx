import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { StyledViewProps } from "../types/styledTypes";
import { theme } from "../themes/theme";

const styles = StyleSheet.create({
  full: {
    width: "100%"
  },
  row: {
    flexDirection: "row"
  },
  justifyCenter: {
    justifyContent: "center"
  },
  justifyBeetwen: {
    justifyContent: "space-between"
  },
  justifyAround: {
    justifyContent: "space-around"
  },
  itemsCenter: {
    alignItems: "center"
  },
  selfCenter: {
    alignSelf: "center"
  },
  selfStart: {
    alignSelf: "flex-start"
  },
  selfEnd: {
    alignSelf: "flex-end"
  },
  flexOne: {
    flex: 1
  },
  flexZero: {
    flex: 0
  }
});

export const StyledView: React.FC<StyledViewProps> = ({
  full,
  row,
  justifyCenter,
  justifyAround,
  justifyBeetwen,
  itemsCenter,
  selfStart,
  selfEnd,
  selfCenter,
  flexOne,
  flexZero,
  style,
  children,
  ...restProps
}) => {
  const viewStyles = [
    full && styles.full,
    row && styles.row,
    justifyCenter && styles.justifyCenter,
    justifyBeetwen && styles.justifyBeetwen,
    justifyAround && styles.justifyAround,
    itemsCenter && styles.itemsCenter,
    selfStart && styles.selfStart,
    selfEnd && styles.selfEnd,
    selfCenter && styles.selfCenter,
    flexOne && styles.flexOne,,
    flexZero && styles.flexZero,,
    style,
  ];

  return (
    <View style={viewStyles} {...restProps}>
      {children}
    </View>
  );
};
