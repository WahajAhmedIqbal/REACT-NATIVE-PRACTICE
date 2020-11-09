import React from "react";
import { View, StyleSheet } from "react-native";

const CardStyle = (props) => {
  return (
    <View style={{ ...styles.cards, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  cards: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 7,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
  },
});

export default CardStyle;
