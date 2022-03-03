import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import CatagoriesScreen from "../screens/CatagoriesScreen";
import CatagorieMealsScreen from "../screens/CatagorieMealsScreen";
import MealsDetailsScreen from "../screens/MealsDetailsScreen";
import { Platform } from "react-native";
import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FiltersScreen from "../screens/FiltersScreen";
// import FavoritesScreen from "../screens/FavoritesScreen";
/* createStackNavigator will take only one object,
 which have key values pairs

 createStackNavigator will actually return a NavigatorContainer and that
 turns out to be a react component

 we also need to create a App container using createAppContainer
 in App container we need to wrap the main/root navigator 

 createAppContainer is always imported from react-navigation ,no matter
 which react-navigation version you'r using

 navigartionOptions in the config (2nd argument) of a   navigator
 only matter if that navigator is used inside of another navigator
 */

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor:
      Platform.OS === "android" ? Colors.primaryColor : Colors.day,
  },
  headerTintColor: Platform.OS === "android" ? Colors.day : Colors.primaryColor,
};
const MealsNavigator = createStackNavigator(
  {
    Catagories: CatagoriesScreen,

    CatagoryMeals: {
      screen: CatagorieMealsScreen,

      navigationOptions: {
        headerStyle: {
          backgroundColor:
            Platform.OS === "android" ? Colors.primaryColor : Colors.day,
        },
        headerTintColor:
          Platform.OS === "android" ? Colors.day : Colors.primaryColor,
      },
    },
    MealDetail: MealsDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const favNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealsDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favorites: {
    screen: favNavigator,
    navigationOptions: {
      tabBarLabel: "Favorites..!",
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.day,
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabScreenConfig,
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

/*here we are using stackNavigator as we will have same
header for this filter too  */
const filtersNavigator = createStackNavigator(
  {
    Filters: {
      screen: FiltersScreen,
    },
  },

  {
    // navigationOptions: { drawerLabel: "hey your Filters" },
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: { drawerLabel: "Favorite Meals" },
    },
    Filters: {
      screen: filtersNavigator,
      navigationOptions: { drawerLabel: "Filter Meals" },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

//export default createAppContainer(MealsNavigator);
export default createAppContainer(MainNavigator);
