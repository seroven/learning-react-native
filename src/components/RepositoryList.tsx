import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import {repositories} from "../data/repositories";
import { RepositoryItem } from "./RepositoryItem";

export const RepositoryList = () => {
  return (
    <>
      <FlatList 
        data={repositories}
        renderItem={({ item }) => (
          <RepositoryItem item={item} />
        )}
      ></FlatList>
    </>
  );
};

