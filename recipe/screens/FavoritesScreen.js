//in this component we will have grid of different catogories of items

import React from "react";
import { View, StyleSheet } from "react-native";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions } from "react-navigation-drawer";
import CustomeHeaderButton from "../components/CustomeHeaderButton";
import { connect } from "react-redux";
import Colors from "../constants/Colors";
import DefaultText from "../components/DefaultText";
const FavoritesScreen = (props) => {
  const favoriteMeals = props.favMeals;
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.favFallback}>
        <DefaultText style={styles.fallbackText}>
          No Favorite Meals added Yet..
        </DefaultText>
      </View>
    );
  }
  return <MealsList selected_Meals={favoriteMeals} {...props} />;
};

FavoritesScreen.navigationOptions = (navigationData) => {
  // console.log(`111111111111111111111`, navigationData);
  return {
    headerTitle: "Your Favorites !!",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navigationData.navigation.dispatch(DrawerActions.toggleDrawer());
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
  favFallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    color: Colors.accentColor,
    fontSize: 20,
  },
});

const mapStateToProps = (state) => {
  console.log(
    "in mapStateToProps in FavoriteScreen",
    state.meals_reducer_state.favoriteMeals
  );
  return {
    favMeals: state.meals_reducer_state.favoriteMeals,
  };
};

export default connect(mapStateToProps, {})(FavoritesScreen);
