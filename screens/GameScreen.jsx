import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
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

  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoise, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoise) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoise, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoise) ||
      (direction === "greater" && currentGuess > props.userChoise)
    ) {
      Alert.alert(`Don't lie`, "You know that this is wrong", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    {
      setGenerateGuess(nextNumber);
      setRounds((curRounds) => curRounds + 1);
    }
  };

  return (
    <View style={styles.screen}>
      <Text>opponent's guess</Text>
      <NumberContainer>{generateGuess}</NumberContainer>
      <CardStyle style={styles.buttonContainer}>
        <Button title="Lower" onPress={() => nextGuessHandler("lower")} />
        <Button title="Greater" onPress={() => nextGuessHandler("greater")} />
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
