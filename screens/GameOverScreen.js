import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const GameOverScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>GameOverScreen</Text>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="New Game" />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
