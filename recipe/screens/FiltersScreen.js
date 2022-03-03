//in this component we will have grid of different catogories of items

import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { DrawerActions } from "react-navigation-drawer";
import CustomeHeaderButton from "../components/CustomeHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../constants/Colors";
const FiltersScreen = (props) => {
  const { navigation } = props;
  const [isGlutinFree, setIsGlutinFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVeganFree, setIsVeganFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  /* in order to avoid unnecessary rebuild/rerender
  we make use of useCallback, which invokes the saveFilters
  function on if its dependencies are changed 
  */
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutinFree,
      lactoseFree: isLactoseFree,
      vegan: isVeganFree,
      vegetarian: isVegetarian,
    };
    console.log("444444444444", appliedFilters);
  }, [isGlutinFree, isLactoseFree, isVeganFree, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  const FilterSwitch = (props) => {
    return (
      <View>
        <View style={styles.filterContainer}>
          <Text style={styles.title}>{props.label}</Text>
          <Switch
            thumbColor={Colors.primaryColor}
            trackColor={{
              true: Colors.accentColor,
              false: Colors.primaryColor,
            }}
            value={props.state}
            onValueChange={props.onSwitchChange}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>This is FiltersScreen</Text>
      <FilterSwitch
        label="Glutin Free"
        state={isGlutinFree}
        onSwitchChange={(newValue) => setIsGlutinFree(newValue)}
      />
      <FilterSwitch
        label="Lactose Free"
        state={isLactoseFree}
        onSwitchChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVeganFree}
        onSwitchChange={(newValue) => setIsVeganFree(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onSwitchChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  // console.log(`111111111111111111111`, navData);
  return {
    headerTitle: "Filters !!",
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.dispatch(DrawerActions.toggleDrawer());
            }}
          />
        </HeaderButtons>
      );
    },
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomeHeaderButton}>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={navData.navigation.getParam("save")}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    //alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    borderWidth: 0.8,
    borderBottomColor: Colors.lg_grey,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    marginVertical: 10,
    textAlign: "center",
  },
});

export default FiltersScreen;
