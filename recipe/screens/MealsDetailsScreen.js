//in this component we will have grid of different catogories of items

import React, { useEffect } from "react";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
// import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomeHeaderButton from "../components/CustomeHeaderButton";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import { connect } from "react-redux";

const ListItems = (props) => {
  return (
    <View style={styles.listItems}>
      <DefaultText style={styles.listFont}> {props.children}</DefaultText>
    </View>
  );
};

const MealsDetailsScreen = (props) => {
  const { navigation } = props;

  const selected_meal_id = props.navigation.getParam("mealId");
  const selected_meal_info = props.mealDetails.find(
    (meal) => meal.id === selected_meal_id
  );

  // useEffect(() => {
  //   navigation.setParams({ mealTitle: selected_meal_info.title });
  // }, [selected_meal_info]);

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
  const selected_meal_id = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  console.log("111111111111111111111", mealTitle);
  // const selected_meal_info = MEALS.find((meal) => meal.id === selected_meal_id);
  return {
    headerTitle: mealTitle,
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
  };
};
export default connect(mapStateToProps, {})(MealsDetailsScreen);
