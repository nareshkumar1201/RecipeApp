// once selected a catagorie this component will have  list of that catagorie receips
//in this component we will have grid of different catogories of items

import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealsList from "../components/MealsList";
import { connect } from "react-redux";
// import Colors from "../constants/Colors";
const CatagorieMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");

  console.log("999999999999999999999", props.filteredMeals);

  // const availableMeals = useSelector((state) => {
  //   // state.meals_reducer_state.filteredMeals;
  //   props.filteredMeals;
  // });

  // console.log("6666666666666666666666666", availableMeals);
  const selected_Catagory_Meals = props.filteredMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const selectedCategory = CATEGORIES.find((catItems) => {
    return catItems.id === categoryId;
  });

  return <MealsList selected_Meals={selected_Catagory_Meals} {...props} />;
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
const mapStateToProps = (state) => {
  console.log("iiiiiiiiiiiiiiii", state);
  return {
    filteredMeals: state.meals_reducer_state.filteredMeals,
  };
};
export default connect(mapStateToProps, {})(CatagorieMealsScreen);
