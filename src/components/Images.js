import * as React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ImageFile = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>React Native Image</Text>
      <Image
        source={require("../../assets/bg_image.jpg")}
        style={styles.imageStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    margin: 20,
  },
  textStyle: {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  imageStyle: {
    height: 600,
    width: 400,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default ImageFile;
