import { TextInput, StyleSheet } from "react-native";

import React from "react";

const Input = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.inputStyle, ...props.style }} />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderBottomColor: "grey",
    borderBottomWidth: 1.5,
    marginVertical: 10,
  },
});
export default Input;
