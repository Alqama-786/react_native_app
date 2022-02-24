import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxPositions = () => {
  return (
    <View style={styles.boxes}>
      <Text style={[styles.BoxText1, styles.commonBoxStyle]}>Box 1</Text>
      <Text style={[styles.BoxText2, styles.commonBoxStyle]}>Box 2</Text>
      <Text style={[styles.BoxText3, styles.commonBoxStyle]}>Box 3</Text>
      <Text style={[styles.BoxText4, styles.commonBoxStyle]}>Box 4</Text>
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={[styles.BoxText5, styles.commonBoxStyle]}>Box 5</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxes: {
    marginTop: 50,
    position: "relative",
    width: "95%",
    height: 500,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "aliceblue",
    marginHorizontal: 20,
  },
  BoxText1: {
    backgroundColor: "pink",
    borderColor: "pink",
  },
  BoxText2: {
    backgroundColor: "blue",
    borderColor: "blue",
    right: 0,
  },
  BoxText3: {
    backgroundColor: "green",
    borderColor: "green",
    right: 0,
    bottom: 0,
  },
  BoxText4: {
    backgroundColor: "yellow",
    borderColor: "yellow",
    bottom: 0,
  },
  BoxText5: {
    backgroundColor: "orange",
    borderColor: "orange",
  },
  commonBoxStyle: {
    width: 80,
    height: 80,
    fontSize: 20,
    borderWidth: 1,
    position: "absolute",
    borderColor: "black",
    color: "white",
  },
});

export default BoxPositions;
