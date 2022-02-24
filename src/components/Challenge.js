import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const Challenge = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle1}>Example Text 1</Text>
      <Text style={styles.textStyle2}>Example Text 2</Text>
      <Text style={styles.textStyle3}>Example Text 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  textStyle1: {
    color: "blue",
    fontSize: 60,
    fontWeight: "bold",
  },
  textStyle2: {
    color: "brown",
    fontSize: 55,
    fontWeight: "bold",
  },
  textStyle3: {
    color: "pink",
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default Challenge;
