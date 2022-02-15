import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DefaultStyles = () => {
  return (
    <View>
      <Text>DefaultStyles</Text>
    </View>
  );
};

export default DefaultStyles;

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: "open-sans",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});
