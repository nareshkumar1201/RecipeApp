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
    case TOGGLE_FAVORITE: {
    }
    default:
      return state;
  }
  //return state;
};

export default MealsReducers;
