import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CardStyle from "../components/CardStyle";
import NumberContainer from "../components/NumberContainer";

const generateRandomNumber = (max, min, exclude) => {
  const max = Math.ceil();
  const min = Math.floor();
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomNumber(max, min, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = () => {
  const [generateGuess, setGenerateGuess] = useState(
    generateRandomNumber(100, 1, props.userChoise)
  );
  return (
    <View style={styles.screen}>
      <Text>opponent's guess</Text>
      <NumberContainer>{generateGuess}</NumberContainer>
      <CardStyle style={styles.buttonContainer}>
        <Button title="Lower" onPress={() => {}} />
        <Button title="Greater" onPress={() => {}} />
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
