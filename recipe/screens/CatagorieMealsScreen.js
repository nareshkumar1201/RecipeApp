// once selected a catagorie this component will have  list of that catagorie receips
//in this component we will have grid of different catogories of items

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

// import Colors from "../constants/Colors";
const CatagorieMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  const selected_Catagory_Meals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const selectedCategory = CATEGORIES.find((catItems) => {
    return catItems.id === categoryId;
  });

  const renderMealItems = (itemData) => {
    return (
      <MealItem
        mealInfo={itemData}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={selected_Catagory_Meals}
        renderItem={renderMealItems}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CatagorieMealsScreen.navigationOptions = (navigationData) => {
  // console.log("-----------------------------------------");
  // console.log(navigationData);
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(
    (categoryItem) => categoryItem.id === categoryId
  );
  return {
    headerTitle: selectedCategory.title,
    //   headerStyle: {
    //     backgroundColor:
    //       Platform.OS === "android" ? Colors.primaryColor : Colors.day,
    //   },
    //   headerTintColor:
    //     Platform.OS === "android" ? Colors.day : Colors.primaryColor,
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CatagorieMealsScreen;
