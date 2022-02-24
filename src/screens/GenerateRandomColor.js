import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

const GenerateRandomColor = () => {
  const [colors, setColors] = React.useState([]);

  const randomColor = () => {
    const firstValue = Math.floor(Math.random() * 256);
    const secondValue = Math.floor(Math.random() * 256);
    const thirdValue = Math.floor(Math.random() * 256);
    return `rgb(${firstValue},${secondValue},${thirdValue})`;
  };

  return (
    <View style={styles.main}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>
          Generate Random Color App In React Native
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.actionBtn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setColors([...colors, randomColor()])}
          >
            <Text style={styles.btnText}>Generate Color</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => setColors([])}>
            <Text style={styles.btnText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          keyExtractor={(key) => key}
          data={colors}
          renderItem={(data) => {
            return (
              <View
                style={{
                  width: "100%",
                  padding: 15,
                  borderRadius: 10,
                  justifyContent: "center",
                  backgroundColor: data.item,
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Text style={styles.colorText}>{data.item}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  navbar: {
    height: 60,
    width: "100%",
    backgroundColor: "#212529",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  navbarText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    position: "relative",
  },
  actionBtn: {
    width: "100%",
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    width: "49%",
    height: 50,
    backgroundColor: "#0d6efd",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(0,0,0,.15)",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  colorText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default GenerateRandomColor;
