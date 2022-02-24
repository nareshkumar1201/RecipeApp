//in this component we will have grid of different catogories of items

import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const MealsDetailsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is Meals Details Screen</Text>
      <Button
        title="go to Home"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealsDetailsScreen;
