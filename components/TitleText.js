import { StyleSheet, Text } from "react-native";
import React from "react";

const TitleText = (props) => {
  return (
    <Text styles={{ ...styles.title, ...props.styles }}>{props.children}</Text>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});
