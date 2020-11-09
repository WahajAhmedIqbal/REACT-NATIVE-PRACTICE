import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import CardStyle from "../components/CardStyle";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start Game!</Text>
      <CardStyle style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <View style={styles.btn1}>
            <Button title="Reset" onPress={() => {}} color={Colors.primary} />
          </View>
          <View style={styles.btn1}>
            <Button
              title="Confirm"
              onPress={() => {}}
              color={Colors.secondray}
            />
          </View>
        </View>
      </CardStyle>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  btn1: {
    width: 100,
  },

  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

export default StartGameScreen;
