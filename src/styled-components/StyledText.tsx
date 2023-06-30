import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { StyledTextProps } from "../types/styledTypes";
import { theme } from "../themes/theme";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.text,
  },
  title: {
    fontSize: theme.fontSizes.title,
  },
  highlight: {
    color: theme.colors.highlight,
  },
  white: {
    color: theme.colors.textVariant,
  },
  bold: {
    fontWeight: theme.fontWeights.bold as "100",
  },
  semibold: {
    fontWeight: theme.fontWeights.semibold as "100",
  },
  outVertical: {
    marginVertical: 5,
  },
  inHorizontal: {
    marginHorizontal: 5,
  },
  textCenter: {
    textAlign: "center",
  },
  textJustify: {
    textAlign: "justify",
  },
});

export const StyledText: React.FC<StyledTextProps> = ({
  title,
  highlight,
  white,
  bold,
  semibold,
  outVertical,
  inHorizontal,
  textCenter,
  textJustify,
  style,
  children,
  ...restProps
}) => {
  const textStyles = [
    styles.text,
    title && styles.title,
    highlight && styles.highlight,
    white && styles.white,
    bold && styles.bold,
    semibold && styles.semibold,
    outVertical && styles.outVertical,
    inHorizontal && styles.inHorizontal,
    textCenter && styles.textCenter,
    textJustify && styles.textJustify,
    style,
  ];

  return (
    <Text style={textStyles} {...restProps}>
      {children}
    </Text>
  );
};
