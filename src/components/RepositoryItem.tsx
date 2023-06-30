import React from "react";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";

import { repositories } from "../data/repositories";
import { StyledText } from "../styled-components/StyledText";
import { RepositoryItemType } from "../types/repositoryTypes";
import { RepositoryStats } from "./RepositoryStats";
import { theme } from "../themes/theme";
import { StyledView } from "../styled-components/StyledView";

interface props {
  item: RepositoryItemType;
}

export const RepositoryItem: React.FC<props> = ({ item }) => {
  return (
    <>
      <View style={styles.container} key={item.id}>
        <StyledView full row itemsCenter>
          <StyledView style={styles.containerDescription} flexOne selfStart>
            <StyledText title bold highlight outVertical>
              {item.id}
            </StyledText>
            <StyledText  textJustify semibold>Fullname: {item.fullName}</StyledText>
            <StyledText >Description: {item.description}</StyledText>
            <StyledText semibold style={styles.language}>
              {item.language}
            </StyledText>
          </StyledView>
          <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
        </StyledView>
        {/* <StyledText>Avatar: {item.ownerAvatarUrl}</StyledText> */}

        <RepositoryStats item={item} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 4,
  },
  containerDescription: {
    paddingRight: 12
  },
  language: {
    backgroundColor: theme.colors.highlight,
    color: "#fff",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 8,
    flex: 1,
    alignSelf: "flex-start",
    marginTop: 5,
  },
});
