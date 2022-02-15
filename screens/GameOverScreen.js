import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>GameOverScreen</TitleText>
      <Image
        fadeDuration={300}
        style={styles.imgae}
        // source={require("../assets/success.png")}
        source={{
          uri: "https://images.pexels.com/photos/411207/pexels-photo-411207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        }}
        resizeMode='cover'
      />
      <BodyText>
        Your phone needed{" "}
        <Text style={styles.highlite}>{props.roundsNumber}</Text> rounds to
        guess the number {props.userNumber}
      </BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <MainButton onPress={props.onRestart}>Start New Game</MainButton>
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
  imgae: {
    width: "80%",
    height: "80%",
    height: 300,
    borderRadius: 200,
  },
  highlite: {
    color: Colors.primary,
  },
});
