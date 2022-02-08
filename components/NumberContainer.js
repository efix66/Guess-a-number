import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const NumberContainer = (props) => {
  return (
    <View style={style.numberStyle}>
      <Text style={style.number}>{props.selectedNumber}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  numberStyle: {
    borderWidth: 2,
    borderColor: Colors.accent,
    borderRadius: 10,
    padding: 8,
    marginVertical: 10,
  },
  number: {
    color: Colors.accent,
    fontSize: 20,
    textAlign: "center",
  },
});

export default NumberContainer;
