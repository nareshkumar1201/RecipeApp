import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
const MealsList = (props) => {
  // console.log("4444444444444444", props);
  const { selected_Meals, render_Meal_Items } = props;
  const renderMealItems = (itemData) => {
    return (
      <MealItem
        mealInfo={itemData}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={selected_Meals}
        renderItem={renderMealItems}
        style={{ width: "100%" }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealsList;
