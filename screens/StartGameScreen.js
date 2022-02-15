import { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
  //Validate what user enters, digits(just numbers) STATE
  const [enteredValue, setEnteredValue] = useState("");

  //Validate if the use has confirmed STATE
  const [confirmed, setConfirmed] = useState(false);

  // String to number STATE
  const [selectedNumber, setSelectedNumber] = useState();

  const inputNumberEntered = (inputText) => {
    //Validation
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const handleTapOutSide = () => {
    //Close keyboard if user taps outside
    Keyboard.dismiss();
  };

  const resetInputHandeler = () => {
    //Reset number entered
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandeler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive" }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.sumaryContainer}>
        <BodyText>You selected</BodyText>
        <NumberContainer selectedNumber={selectedNumber} />
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          Start Game
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={handleTapOutSide}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a new game</TitleText>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            keyboardType='number-pad'
            maxLength={2}
            autoCorrect={false}
            onChangeText={inputNumberEntered}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
              <Button
                title='Reset'
                onPress={resetInputHandeler}
                color={Colors.primary}
              />
            </View>
            <View style={styles.buttonStyle}>
              <Button
                title='Confirm'
                onPress={confirmInputHandeler}
                color={Colors.accent}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 10, alignItems: "center" },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  buttonStyle: {
    width: 100,
  },
  input: {
    width: 25,
    textAlign: "center",
  },
  sumaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
