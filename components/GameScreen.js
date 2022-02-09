import { View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
import NumberContainer from "./NumberContainer";
import Card from "./Card";

const generateRandomNBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRandomNBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = () => {
  //Current guess of computer STATE
  const [curentGuess, setCurrentGues] = useState(
    generateRandomNBetween(1, 100, props.userChoise)
  );
  return (
    <View style={styles.screen}>
      <Text>Oponent Guess</Text>
      <NumberContainer>{curentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="GREATER" onPress={() => {}} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});
export default GameScreen;
