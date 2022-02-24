import * as React from "react";
import {
  Button,
  View,
  Alert,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const ButtonExample = () => {
  return (
    <View>
      <Button
        title="Press Me"
        onPress={() => Alert.alert("Pressed!")}
        accessibilityLabel="btn"
        color="#841584"
      />
      <TouchableOpacity onPress={() => Alert.alert("Image Pressed!")}>
        <Image
          source={require("../../assets/bg_image.jpg")}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 600,
    width: 400,
    borderRadius: 50,
    marginBottom: 20,
  },
});

export default ButtonExample;
