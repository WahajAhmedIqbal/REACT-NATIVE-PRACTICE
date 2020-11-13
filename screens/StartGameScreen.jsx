import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import CardStyle from "../components/CardStyle";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import Colors from "../constants/colors";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredVlue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selected, setSelected] = useState();

  const numberHandler = (enteredNumber) => {
    setEnteredVlue(enteredNumber.replace(/[^0-9]/g, ""));
  };

  const resetHandlerButton = () => {
    setEnteredVlue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const choseNumber = parseInt(enteredValue);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99 ",
        [{ text: "Okay", style: "destructive", onPress: resetHandlerButton }]
      );
      return;
    }
    setConfirmed(true);

    setSelected(choseNumber);
    setEnteredVlue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <CardStyle style={styles.summerycard}>
        <Text style={{ alignItems: "center" }}>you select</Text>
        <View>
          <NumberContainer>{selected}</NumberContainer>
          <Button
            title="Start Game"
            onPress={() => props.onStartGame(selected)}
          />
        </View>
      </CardStyle>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start Game!</Text>
        <CardStyle style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberHandler}
            value={enteredValue}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.btn1}>
              <Button
                title="Reset"
                onPress={resetHandlerButton}
                color={Colors.primary}
              />
            </View>
            <View style={styles.btn1}>
              <Button
                title="Confirm"
                onPress={confirmInputHandler}
                color={Colors.secondray}
              />
            </View>
          </View>
        </CardStyle>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    width: 50,
    textAlign: "center",
  },
  summerycard: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
