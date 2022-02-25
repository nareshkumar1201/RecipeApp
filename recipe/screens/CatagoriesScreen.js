//in this component we will have grid of different catogories of items

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
/*Any component that we load through react navigation 
gets a special props passed in automatically  , the props includes
navitation object which has a navigate mehtod, which takes an 
object were we can specify the name of the route that we need to navigate*/

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
const CatagoriesScreen = (props) => {
  // console.log(props);
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CatagoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CatagoriesScreen.navigationOptions = {
  headerTitle: "Meals Categories",
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CatagoriesScreen;
