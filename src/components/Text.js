import * as React from "react";
import { Text, StyleSheet } from "react-native";

const ExampleText = () => {
  return (
    <Text style={styles.textStyle}>
      This Is My Component!
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default ExampleText;
