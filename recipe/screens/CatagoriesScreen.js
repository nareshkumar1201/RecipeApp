//in this component we will have grid of different catogories of items

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
/*Any component that we load through react navigation 
gets a special props passed in automatically  , the props includes
navitation object which has a navigate mehtod, which takes an 
object were we can specify the name of the route that we need to navigate*/
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

const CatagoriesScreen = (props) => {
  // console.log(props);
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItems}
        onPress={() => {
          props.navigation.navigate({ routeName: "CatagoryMeals" });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
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
  headerStyle: {
    backgroundColor:
      Platform.OS === "android" ? Colors.primaryColor : Colors.day,
  },
  headerTintColor: Platform.OS === "android" ? Colors.day : Colors.primaryColor,
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItems: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CatagoriesScreen;
