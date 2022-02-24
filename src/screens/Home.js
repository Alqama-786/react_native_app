import * as React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const HomePage = ({ route, navigation }) => {
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Welcome back {name}! </Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack()}>
        <Text style={styles.btnText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  btn: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#4630EB",
  },
  btnText: {
    fontSize: 18,
    color: "#fff",
    textTransform: "capitalize",
    letterSpacing: 1,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default HomePage;
