import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import Colors from "../constants/Colors";
const CategoryGridTile = (props) => {
  let TouchableItem = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableItem = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItems}>
      <TouchableItem
        style={{ flex: 1 }}
        onPress={() => {
          props.onSelect();
        }}
      >
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right",
  },
  gridItems: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
  },
});

export default CategoryGridTile;
