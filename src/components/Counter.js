import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>Counter In React Native</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.countText}>{count}</Text>
        <View style={styles.countActions}>
          <TouchableOpacity
            style={styles.counterActionsBtn}
            onPress={() => setCount(count + 10)}
          >
            <Text style={styles.counterActionsBtnText}>+10</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterActionsBtn}
            onPress={() => setCount(0)}
          >
            <Text style={styles.counterActionsBtnText}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.counterActionsBtn}
            onPress={() => setCount(count - 10)}
            disabled={count === 0}
          >
            <Text style={styles.counterActionsBtnText}>-10</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  navbar: {
    marginTop: 50,
    height: 60,
    width: "100%",
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  navbarText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  countText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  countActions: {
    padding: 20,
  },
  counterActionsBtn: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    margin: 20,
    backgroundColor: "black",
    borderRadius: 10,
  },
  counterActionsBtnText: {
    fontSize: 40,
    color: "#fff",
  },
});

export default Counter;
