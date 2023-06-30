import { StyleSheet, View } from "react-native";
import { StyledText } from "../styled-components/StyledText";
import { RepositoryItemType } from "../types/repositoryTypes";
import { StyledView } from "../styled-components/StyledView";

interface props {
  item: RepositoryItemType;
}

function parseThousands(value:number):string{  
  return value >= 1000 ? `${Math.round(value / 100)/ 10}k` : String(value)
}

export const RepositoryStats: React.FC<props> = ({ item }) => {
  return (
    <StyledView row justifyAround style={styles.container}>
      <StyledView itemsCenter>
        <StyledText semibold>Forks</StyledText>
        <StyledText bold highlight>{parseThousands(item.forksCount)}</StyledText>
      </StyledView>
      <StyledView itemsCenter>
        <StyledText semibold>Stars</StyledText>
        <StyledText bold highlight>{parseThousands(item.stargazersCount)}</StyledText>
      </StyledView>
      <StyledView itemsCenter>
        <StyledText semibold>Rating</StyledText>
        <StyledText bold highlight>{item.ratingAverage}</StyledText>
      </StyledView>
      <StyledView itemsCenter>
        <StyledText semibold>Reviews</StyledText>
        <StyledText bold highlight>{item.reviewCount}</StyledText>
      </StyledView>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5
  }
});
