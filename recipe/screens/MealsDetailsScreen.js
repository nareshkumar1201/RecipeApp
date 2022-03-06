//in this component we will have grid of different catogories of items

import React, { useEffect, useCallback } from "react";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
// import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomeHeaderButton from "../components/CustomeHeaderButton";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import { connect, useDispatch } from "react-redux";
import { MealsAction } from "../store/actions/MealsAction";
const ListItems = (props) => {
  return (
    <View style={styles.listItems}>
      <DefaultText style={styles.listFont}> {props.children}</DefaultText>
    </View>
  );
};

const MealsDetailsScreen = (props) => {
  const { navigation, mealDetails } = props;

  const selected_meal_id = navigation.getParam("mealId");
  const selected_meal_info = mealDetails.find(
    (meal) => meal.id === selected_meal_id
  );

  const currentFavMeal = props.favMeals.some(
    (meal) => meal.id === selected_meal_id
  );

  useEffect(() => {
    navigation.setParams({ existedFavMeal: currentFavMeal });
  }, [currentFavMeal]);
  const dispatch = useDispatch();

  // console.log("121212212121121212121", props.MealsAction);

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(MealsAction(selected_meal_id));
  }, [dispatch, selected_meal_id]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: selected_meal_info.imgUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selected_meal_info.duration} min</DefaultText>
        <DefaultText>{selected_meal_info.complexity.toUpperCase()}</DefaultText>
        <DefaultText>
          {selected_meal_info.affordability.toUpperCase()}
        </DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selected_meal_info.ingrediants.map((item, id) => (
        <ListItems key={id}>{item}</ListItems>
      ))}

      <Text style={styles.title}>Steps</Text>
      {selected_meal_info.steps.map((step, id) => (
        <ListItems key={id}>{step}</ListItems>
      ))}
    </ScrollView>
  );
};

MealsDetailsScreen.navigationOptions = (navigationData) => {
  console.log("55555555555555555555555", navigationData);
  const selected_meal_id = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("existedFavMeal");
  // console.log("--------------------------------", toggleFavorite);
  // const selected_meal_info = MEALS.find((meal) => meal.id === selected_meal_id);
  return {
    headerTitle: mealTitle,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
          <Item
            title="Favorite"
            iconName={isFavorite ? "ios-star" : "ios-star-outline"}
            onPress={toggleFavorite}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  details: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
    padding: 25,
  },
  listItems: {
    marginVertical: 5,
    marginHorizontal: 20,
    borderColor: Colors.lg_grey,
    padding: 10,
    borderBottomWidth: 1,
  },
  listFont: {
    fontSize: 18,
    textAlign: "justify",
  },
});

const mapStateToProps = (state) => {
  // console.log("333333333333333333", state.meals_reducer_state.meals);
  return {
    mealDetails: state.meals_reducer_state.meals,
    favMeals: state.meals_reducer_state.favoriteMeals,
  };
};
export default connect(mapStateToProps, { MealsAction })(MealsDetailsScreen);
