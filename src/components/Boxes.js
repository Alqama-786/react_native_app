import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxesDemo = () => {
  return (
    <View style={styles.boxes}>
      <View style={[styles.box, styles.box1]}>
        <Text style={[styles.boxText, styles.boxText1]}>Box Model RN</Text>
      </View>
      <View style={[styles.box, styles.box2]}>
        <Text style={[styles.boxText, styles.boxText2]}>Box Model RN</Text>
      </View>
      <View style={[styles.box, styles.box3]}>
        <Text style={[styles.boxText, styles.boxText3]}>Box Model RN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxes: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 40,
    borderColor: "black",
    borderWidth: 3,
    width: "80%",
  },
  box: {
    width: "100%",
    height: 100,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
    borderWidth: 4,
  },
  box1: {
    backgroundColor: "rgba(255, 0, 0, 0.432)",
    borderColor: "red",
  },
  box2: {
    backgroundColor: "rgba(0, 0, 255, 0.452)",
    borderColor: "blue",
  },
  box3: {
    backgroundColor: "rgba(0, 128, 0, 0.425)",
    borderColor: "green",
  },
  boxText: {
    fontSize: 20,
    textShadowColor: "black",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 12,
  },
  boxText1: {
    color: "red",
  },
  boxText2: {
    color: "blue",
  },
  boxText3: {
    color: "green",
  },
});

export default BoxesDemo;
