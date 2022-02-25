//in this component we will have grid of different catogories of items

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomeHeaderButton from "../components/CustomeHeaderButton";

const MealsDetailsScreen = (props) => {
  const selected_meal_id = props.navigation.getParam("mealId");
  const selected_meal_info = MEALS.find((meal) => meal.id === selected_meal_id);

  return (
    <View style={styles.screen}>
      <Text>{selected_meal_info.title}</Text>
    </View>
  );
};

MealsDetailsScreen.navigationOptions = (navigationData) => {
  const selected_meal_id = navigationData.navigation.getParam("mealId");
  const selected_meal_info = MEALS.find((meal) => meal.id === selected_meal_id);
  return {
    headerTitle: selected_meal_info.title,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
          <Item
            title="Favorite"
            iconName="ios-star"
            onPress={() => {
              console.log("Mark as Favorite");
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealsDetailsScreen;
