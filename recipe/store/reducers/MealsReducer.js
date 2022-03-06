/* logic for mealsreducers updating logic,
for marking meal as favorite and managing filters
*/

import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/MealsAction";
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const MealsReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      /* first we find the index of the meal in favoriteMeals array
         if meal is already exist in the array , we will remove it using splice
         else if meal is not in favorite list we will add to array using concat 
       */

      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      /*findIndex will return the index value of the item if exist which will be
      a positive value ie >=0 , using that indexvalue we will splice/remove
      meal/items from array by specifing the no.of items that needs to be removed
      from that index value */
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        // console.log(
        //   "favorite meal is not in the array we will added the meal to array"
        // );
        /*if meal is not present in favorite array list , we need to find the
        selected meal from Meals array, which has a list of meals, then we 
        need to add to favoriteMeals array list  */
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        // console.log("ssssssssssss your favorite meal selected", meal);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    default:
      return state;
  }
  //return state;
};

export default MealsReducers;
