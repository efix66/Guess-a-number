import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    textShadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.6,
    backgroundColor: "white",
    elevation: 8,
    padding: 15,
    borderRadius: 5,
  },
});
export default Card;
