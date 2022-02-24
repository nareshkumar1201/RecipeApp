import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CatagoriesScreen from "../screens/CatagoriesScreen";
import CatagorieMealsScreen from "../screens/CatagorieMealsScreen";
import MealsDetailsScreen from "../screens/MealsDetailsScreen";
/* createStackNavigator will take only one object,
 which have key values pairs

 createStackNavigator will actually return a NavigatorContainer and that
 turns out to be a react component

 we also need to create a App container using createAppContainer
 in App container we need to wrap the main/root navigator 

 createAppContainer is always imported from react-navigation ,no matter
 which react-navigation version you'r using
 */
const MealsNavigator = createStackNavigator({
  Catagories: CatagoriesScreen,
  CatagoryMeals: { screen: CatagorieMealsScreen },
  MealDetail: MealsDetailsScreen,
});

export default createAppContainer(MealsNavigator);
