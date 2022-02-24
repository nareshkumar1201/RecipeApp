// once selected a catagorie this component will have  list of that catagorie receips
//in this component we will have grid of different catogories of items

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CatagorieMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is Catagorie Meals Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
      <Button
        title="BACK"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CatagorieMealsScreen;
